import { getDataLogic } from "../service/registration.service.js";

const getData = async (req, res, next) => {
  try {
    let results = await getDataLogic();
    console.log("do you proceed");
    res.status(200).json({ results });
  } catch (error) {
    next(error);
  }
};

export { getData };
