"use strict";

const Image = use("App/Models/Image");

class ImageController {
  async index({ request }) {
    const user_id =
      request.input("user_id") !== "" ? request.input("user_id") : "";

    const image = Image.query()
      .where("user_id", "=", user_id)
      .fetch();

    return image;
  }

  async store({ request }) {
    const data = request.only(["user_id", "name", "favorite", "url"]);

    const image = await Image.create(data);

    return image;
  }

  async show({ params }) {
    const image = await Image.findOrFail(params.id);

    return image;
  }

  async update({ params, request }) {
    const image = await Image.findOrFail(params.id);

    const data = request.only(["user_id", "name", "favorite", "url"]);

    image.merge(data);

    await image.save();

    return image;
  }

  async destroy({ params }) {
    const image = await Image.findOrFail(params.id);

    await image.delete();
  }
}

module.exports = ImageController;
