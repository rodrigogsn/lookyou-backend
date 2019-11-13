"use strict";

const Calendar = use("App/Models/Calendar");

class CalendarController {
  async index() {
    const calendar = Calendar.query()
      .with("looks", builder => {
        builder.with("look_images", builder => {
          builder.with("images");
        });
      })
      .fetch();

    return calendar;
  }

  async store({ request }) {
    const data = request.only([
      "user_id",
      "type",
      "all_day",
      "startTime",
      "endTime",
      "title",
      "look_id"
    ]);

    const calendar = await Calendar.create(data);

    return calendar;
  }

  async show({ params }) {
    const calendar = await Calendar.findOrFail(params.id);

    await calendar.load("looks", builder => {
      builder.with("look_images", builder => {
        builder.with("images");
      });
    });

    return calendar;
  }

  async update({ params, request }) {
    const calendar = await Calendar.findOrFail(params.id);

    const data = request.only([
      "user_id",
      "type",
      "all_day",
      "startTime",
      "endTime",
      "title",
      "look_id"
    ]);

    calendar.merge(data);

    await calendar.save();

    return calendar;
  }

  async destroy({ params }) {
    const calendar = await Calendar.findOrFail(params.id);

    await calendar.delete();
  }
}

module.exports = CalendarController;
