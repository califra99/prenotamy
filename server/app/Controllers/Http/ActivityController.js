'use strict'

const { validate } = use('Validator')
const Activity = use('App/Models/Activity')
const ActivityType = use('App/Models/ActivityType')
const Event = use('Event')

class ActivityController {

  async register({ request, response }) {
    // set rules for validation
    const rules = {
      nameActivity: 'required|string|unique:activities,nameActivity',
      phone: 'required|string|unique:activities,phone',
      email: 'required|email|unique:activities,email',
      password: 'required|min:6',
      title: 'required|string'
    };
    //fetch inputs from request
    const ActivityData = request.only(['nameActivity', 'phone', 'email', 'password'])
    const ActivityTypeData = request.only(['title'])
    //validate the inputs
    const validation = await validate(request.all(), rules)
    if (validation.fails()) {
      return response.status(401).json({
        message: 'Activity Registration Failed',
        data: validation.messages()
      })
    }
    //update the db tables with new values
    const NewActivityType = await ActivityType.create(ActivityTypeData);
    ActivityData.activity_type_id = NewActivityType.id

    await Activity.create({
      nameActivity: ActivityData.nameActivity,
      phone: ActivityData.phone,
      email: ActivityData.email,
      password: ActivityData.password,
      activity_type_id: ActivityData.activity_type_id
    })
    //return response
    return response.status(201).json({
      message: 'Activity Created Succesfully'
    })
  }

  async search({ params, request, response }) {


    let query = request.input('q')

    if(query == "") {
      return
    }

    let activities = await Activity.query().where('nameActivity', 'like', '%' + query + '%').fetch()

    Event.fire('search::results', activities.toJSON())

    return activities.toJSON()
  }

}

module.exports = ActivityController
