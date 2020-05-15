'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivitySchema extends Schema {
  up () {
    this.create('activities', (table) => {
      table.increments()
      table.timestamps()
      table.string('nameActivity', 200).notNullable().unique()
      table.string('phone', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('activity_type_id', 60).nullable()
      
    })
  }

  down () {
    this.drop('activities')
  }
}

module.exports = ActivitySchema
