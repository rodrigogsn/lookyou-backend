"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Look extends Model {
  look_images() {
    return this.hasMany("App/Models/LookImage");
  }

  calendars() {
    return this.belongsTo("App/Models/Calendar");
  }
}

module.exports = Look;
