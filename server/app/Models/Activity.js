'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Activity extends Model {
    static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     *
     * Look at `app/Models/Hooks/User.js` file to
     * check the hashPassword method
     */
    this.addHook('beforeCreate', 'User.hashPassword')
    }

    activityType() {
        return this.belongsTo('app/Models/Activity')
    }
}

module.exports = Activity
