import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

const FormData = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState();
  const [designation, setDesignation] = useState();
  const [password, setPassword] = useState();
  const [listOfUsers, setListOfUsers] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/addUser", {
      name: name,
      age: age,
      email: email,
      designation: designation,
      password: password,
    })
      .then(() => {
        alert("Sended  Data");
      })
      .catch(() => {
        alert("not sendned");
      });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/read", {
      name: name,
      age: age,
      email: email,
      designation: designation,
      password: password,
    })
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch(() => {
        console.log("not get");
      });
  }, []);

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      <br></br>
      <br></br>

      <label>Age:</label>
      <input
        type="number"
        name="age"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />

      <br></br>
      <br></br>

      <label>Email:</label>
      <input
        type="email"
        name="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <br></br>
      <br></br>

      <label>Designation:</label>
      <input
        type="text"
        name="designation"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <br></br>
      <br></br>

      <label>Password:</label>
      <input
        type="password"
        name="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <br></br>
      <button onClick={addUser}>Submit</button>

      <br></br>
      <h1>Data</h1>
      {listOfUsers.map((val) => {
        return (
          <div>
            {/* {" "}
            {val.name}
            {val.age}
            {val.email}
            {val.passowrd} */}
            <table
              className="abc"
              style={{ border: "2px solid red", padding: "10px" }}
            >
              {/* <tr >
                <th>name</th>
                <th>age</th>
                <th>email</th>
              </tr> */}
              <tr>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.designation}</td>
                <td>{val.email}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default FormData;
