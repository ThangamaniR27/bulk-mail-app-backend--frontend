const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signin", (req, res) => {

  const { email, password } = req.body;

  if (
    email === "admin@gmail.com" &&
    password === "12345"
  ) {

    res.json({
      message: "Login Success"
    });

  } else {

    res.status(401).json({
      message: "Invalid Email Or Password"
    });

  }

});

app.post("/send-email", (req, res) => {

  res.json({
    message: "Emails Sent Successfully"
  });

});

app.get("/history", (req, res) => {

  res.json([
    {
      subject: "Project Update",
      body: "Meeting at 4 PM",
      recipients: ["test@gmail.com"],
      status: "Success"
    }
  ]);

});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});