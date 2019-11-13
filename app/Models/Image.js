"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Image extends Model {
  look_images() {
    return this.belongsTo("App/Models/LookImages");
  }
}

module.exports = Image;
