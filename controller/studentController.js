const fs = require("fs");
const data = require("../Data.json");
const { v4: uuidv4 } = require("uuid");


// display student data
const studentDisplay = (req, res) => {
  res.send(data);
};

//save data into the file
const studentAdd = (req, res) => {
  res.end(JSON.stringify(req.body, null, 2));
  const id = uuidv4();
  let studentObject = {
    id: id,
    firstName: req.body.firstName,
    email: req.body.email,
  };
  data.push(studentObject);
  console.log(data);
  //convert studentArray into JSON string
  let studentJson = JSON.stringify(data);
  //   //perform file write operation
  fs.writeFile("./Data.json", studentJson, (error) => {
    if (error) {
      console.log("wrong");
    } else {
      console.log("data save successfully....");
    }
  });
};


//update student
const studentUpdate = (req, res) => {
  let id = req.params.id;
  let firstName= req.body.firstName;
  let email = req.body.email;

  let index = data.findIndex((studentObject) => {
    return studentObject.id === id;
  });
  if (index>=0) {
    let stud = data[index];
    stud.firstName = firstName;
    stud.email = email;
   
  } else {
    res.status("record not found");
  }
  let studentJson = JSON.stringify(data);
  //   //perform file write operation
  fs.writeFile("./Data.json", studentJson, (error) => {
    if (error) {
      console.log("wrong");
    } else {
      console.log("data save successfully....");
    }
    res.send("Record updated Successfully");
  });
};

//delete specific record
const studentDelete = (req, res) => {
  let id = req.params.id;
  let index = data.findIndex((studentObject) => {
    return studentObject.id == Number.parseInt(id);
  });

  if (index >= 0) {
    let deleteStudent = data[index];
    data.splice(index, 1);
    res.send("record has been deleted successfully");
  } else {
    res.send("Data Not found");
  }
};

module.exports = { studentDisplay, studentAdd, studentUpdate, studentDelete };
