const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

var axios = require("axios");

var FormData = require("form-data");
var data = new FormData();

const userData = {
  email: "test@rapptrlabs.com",
  password: "Test123",
};

app.get("/", (req, res) => {
  res.send("hi");
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (email !== userData.email || password !== userData.password) {
    console.log("Username or Password is Wrong.");
    return res.status(401).json({
      error: true,
      message: "Username or Password is Wrong.",
    });
  }

  data.append("email", email);
  data.append("password", password);

  var config = {
    method: "post",
    url: "http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
    headers: {
      "Content-Type": "application/json",
      ...data.getHeaders(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      resData = JSON.stringify(response.data);
      console.log(resData);

      res.send(resData);
    })
    .catch(function (error) {
      console.log(error);
      res.send(error);
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
