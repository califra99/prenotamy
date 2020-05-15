'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')


class UserController {
  create ({ view }) {
    return view.render('user.create')
  }

  async register({request, response}) {
    // set rules for validation
    const rules = {
      username: 'required|string|unique:users,username',
      name: 'required|string|unique:users,name',
      surname: 'required|string|unique:users,surname',
      phone: 'required|string|unique:users,phone',
      email: 'required|email|unique:users,email',
      password: 'required|min:6',
    };
    //fetch inputs from request
    const userData = request.only(['username', 'name', 'surname', 'phone', 'email', 'password'])
    //validate the inputs
    const validation = await validate(request.all(), rules)
    if(validation.fails()) {  
      return response.status(401).json({
        message: 'User Registration Failed',
        data: validation.messages()
      })
    }
    //update the db tables with new values
    await User.create(userData);
    //return response
    return response.status(201).json({
      message: 'User Created Succesfully'
    })
  }
}

module.exports = UserController
