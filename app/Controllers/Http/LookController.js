"use strict";

const Look = use("App/Models/Look");

class LookController {
  async index() {
    const looks = Look.query()
      .with("look_images", builder => {
        builder.with("images");
      })
      .fetch();

    return looks;
  }

  async store({ request, response }) {
    const data = request.only(["user_id", "name", "favorite"]);

    const look = await Look.create(data);

    return look;
  }

  async show({ params }) {
    const look = await Look.findOrFail(params.id);

    await look.load("look_images", builder => {
      builder.with("images");
    });

    return look;
  }

  async update({ params, request, response }) {
    const look = await Look.findOrFail(params.id);

    const data = request.only(["user_id", "name", "favorite"]);

    look.merge(data);

    await look.save();

    return look;
  }

  async destroy({ params }) {
    const look = await Look.findOrFail(params.id);

    await look.delete();
  }
}

module.exports = LookController;
