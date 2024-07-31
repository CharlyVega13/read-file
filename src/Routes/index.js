const { Router } = require("express");
const readFile = require("./Controllers/readFile");

const router = Router();
router.get("/",async (req, res) => {
  try {
    const response= await readFile()
    res.status(200).json(response);
  } catch (error) {
console.log(error);
      res.status(400).send(error.message);
  }
});
module.exports = router;
