const express = require("express");
const bodyParser = require("body-parser");
const {studentDisplay,studentAdd,studentUpdate,studentDelete} = require("../controller/studentController");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


//save student data into json file
router.post("/studentadd",studentAdd);
  
  //student data display
  router.get("/studentdisplay",studentDisplay);
  
  // student data update
  router.put("/studentupdate/:id",studentUpdate );
  
  //deleting student
  router.delete("/studentdelete/:id",studentDelete );

  module.exports = router  