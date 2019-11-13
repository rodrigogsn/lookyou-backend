"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CalendarSchema extends Schema {
  up() {
    this.create("calendars", table => {
      table.increments();
      table.string("user_id");
      table.string("time");
      table.timestamp("startTime").defaultTo(this.fn.now());
      table.timestamp("endTime").defaultTo(this.fn.now());
      table.string("title");
      table
        .integer("look_id")
        .unsigned()
        .references("id")
        .inTable("looks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("calendars");
  }
}

module.exports = CalendarSchema;
