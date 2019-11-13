"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ImageSchema extends Schema {
  up() {
    this.create("images", table => {
      table.increments();
      table.string("user_id").notNullable();
      table.string("url").notNullable();
      table.string("name").notNullable();
      table.boolean("favorite").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("images");
  }
}

module.exports = ImageSchema;
