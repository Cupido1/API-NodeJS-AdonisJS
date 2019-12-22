'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CombinationSchema extends Schema {
  up () {
    this.create('combinations', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('combinations')
  }
}

module.exports = CombinationSchema
