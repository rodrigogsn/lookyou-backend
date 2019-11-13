"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LookImageSchema extends Schema {
  up() {
    this.create("look_images", table => {
      table.increments();
      table
        .integer("look_id")
        .unsigned()
        .references("id")
        .inTable("looks")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("image_id")
        .unsigned()
        .references("id")
        .inTable("images")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("look_images");
  }
}

module.exports = LookImageSchema;
