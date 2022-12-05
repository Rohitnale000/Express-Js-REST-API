
const fs = require("fs"); 
var studentArray = [];


const studentDisplay = (req, res) => {
    res.json(studentArray);
    console.log(studentArray);
    fs.writeFile("./Data.json", JSON.stringify(studentArray), (err) => {
      if (err) {
        console.log("data is not present");
      } else {
        console.log("Display Data success...");
      }
    });
  }

  const studentAdd = (req, res)=> {
    res.end(JSON.stringify(req.body, null, 2));
  
    let studentObject = {
      id: studentArray.length + 1,
      first_name: req.body.first_name,
      email: req.body.email,
    };
  
    studentArray.push(studentObject);
    console.log(studentArray);
  
    //convert studentArray into JSON string
    let studentJson = JSON.stringify(studentArray);
    //   //perform file write operation
    fs.writeFile("./Data.json", studentJson, (error) => {
      if (error) {
        console.log("wrong");
      } else {
        console.log("data save successfully....");
      }
    });
  }

  const studentUpdate = (req, res) => {
    let id = req.params.id;
    let first_name = req.body.first_name;
    let email = req.body.email;
  
    let index = studentArray.findIndex((studentObject) => {
      return studentObject.id == Number.parseInt(id);
    });
    if (index >= 0) {
      let std = studentArray[index];
      std.first_name = first_name;
      std.email = email;
      res.send(std);
      console.log(std);
    } else {
      res.status(404);
    }
  }

  const studentDelete = (req, res) => {
    let id = req.params.id;
    let index = studentArray.findIndex((studentObject) => {
      return studentObject.id == Number.parseInt(id);
    });
  
    if (index >= 0) {
      let deleteStudent = studentArray[index];
      studentArray.splice(index, 1);
      res.send(deleteStudent);
      console.log(deleteStudent);
    } else {
      res.status(404);
    }
  }

  module.exports = {studentDisplay,studentAdd,studentUpdate,studentDelete};