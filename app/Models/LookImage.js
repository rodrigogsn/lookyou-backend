"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class LookImage extends Model {
  looks() {
    return this.belongsTo("App/Models/Look");
  }

  images() {
    return this.hasMany("App/Models/Image");
  }
}

module.exports = LookImage;
