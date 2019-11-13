"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Calendar extends Model {
  looks() {
    return this.belongsTo("App/Models/Look");
  }
}

module.exports = Calendar;
