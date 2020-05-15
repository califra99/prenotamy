'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivityTypeSchema extends Schema {
  up () {
    this.create('activity_types', (table) => {
      table.increments()
      table.timestamps()
      table.string('title', 80).notNullable()
    })
  }

  down () {
    this.drop('activity_types')
  }
}

module.exports = ActivityTypeSchema
