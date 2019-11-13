"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LookSchema extends Schema {
  up() {
    this.create("looks", table => {
      table.increments();
      table.string("user_id");
      table.string("name");
      table.boolean("favorite");
      table.timestamps();
    });
  }

  down() {
    this.drop("looks");
  }
}

module.exports = LookSchema;
