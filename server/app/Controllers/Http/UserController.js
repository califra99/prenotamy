'use strict'

const User = use('App/Models/User')
const { validateAll } = use('Validator')

class UserController {
  create ({ view }) {
    return view.render('user.create')
  }
}

module.exports = UserController
