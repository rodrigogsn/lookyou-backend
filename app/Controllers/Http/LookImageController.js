"use strict";

const Look_image = use("App/Models/LookImage");

class LookController {
  async store({ request, response }) {
    const data = request.only(["look_id", "image_id"]);

    const look_image = await Look_image.create(data);

    return look_image;
  }

  async show({ params }) {
    const look_image = await Look_image.findOrFail(params.id);

    await look_image.load("images");

    return look_image;
  }

  async destroy({ params }) {
    const look_image = await Look_image.findOrFail(params.id);

    await look_image.delete();
  }
}

module.exports = LookController;
