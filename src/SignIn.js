import React, { useState } from "react";
import axios from "axios";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignIn = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/signin",
        {
          email,
          password
        }
      );

      window.location.href = "/mail";

    } catch (error) {

      setMessage("Invalid Email Or Password");

    }

  };

  return (

    <div style={styles.container}>

      <div style={styles.leftSection}>

        <h1 style={styles.title}>
          Bulk Mail App
        </h1>

        <p style={styles.description}>
          Securely send bulk emails with a modern dashboard.
        </p>

      </div>

      <div style={styles.rightSection}>

        <form style={styles.form} onSubmit={handleSignIn}>

          <h2 style={styles.formTitle}>
            Sign In
          </h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Sign In
          </button>

          <p style={styles.message}>
            {message}
          </p>

        </form>

      </div>

    </div>

  );

}

const styles = {

  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial"
  },

  leftSection: {
    flex: 1,
    background: "linear-gradient(to right, #7f5af0, #2cb67d)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "40px"
  },

  title: {
    fontSize: "50px"
  },

  description: {
    marginTop: "20px",
    fontSize: "18px"
  },

  rightSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f7fb"
  },

  form: {
    background: "#fff",
    padding: "40px",
    width: "400px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  },

  formTitle: {
    textAlign: "center",
    marginBottom: "30px"
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(to right, #7f5af0, #2cb67d)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer"
  },

  message: {
    textAlign: "center",
    marginTop: "15px",
    color: "red"
  }

};

export default SignIn;