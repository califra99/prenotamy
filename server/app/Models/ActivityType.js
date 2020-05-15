'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ActivityType extends Model {
    activity() {
        return this.hasMany('app/Models/Activity')
    }
}

module.exports = ActivityType
