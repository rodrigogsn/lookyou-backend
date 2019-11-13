"use strict";

const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.resource("looks", "LookController").apiOnly();
Route.resource("images", "ImageController").apiOnly();
Route.resource("look_images", "LookImageController").apiOnly();
Route.resource("calendars", "CalendarController").apiOnly();
