import express from "express";
let registration_router = express.Router();

import { getData } from "../controller/registration.controller.js";

function router() {
  registration_router.route("").get(getData);

  return registration_router;
}

let registrationRouter = router();

export {registrationRouter}
