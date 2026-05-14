import React, { useState } from "react";
import axios from "axios";

function MailForm() {

  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [recipients, setRecipients] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = async (e) => {

    e.preventDefault();

    try {

      const emailList = recipients
        .split(",")
        .map(email => email.trim());

      const response = await axios.post(
        "http://localhost:5000/send-email",
        {
          subject,
          body,
          recipients: emailList
        }
      );

      setMessage(response.data.message);

    } catch (error) {

      setMessage("Failed To Send Emails");

    }

  };

  return (

    <div style={styles.container}>

      <form style={styles.form} onSubmit={sendMail}>

        <h1 style={styles.heading}>
          Bulk Mail Sender
        </h1>

        <input
          type="text"
          placeholder="Enter Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Enter Email Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={styles.textarea}
        />

        <textarea
          placeholder="Enter Emails separated by commas"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Send Emails
        </button>

        <p>{message}</p>

      </form>

    </div>

  );

}

const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f7fb"
  },

  form: {
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    width: "450px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "25px"
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  },

  textarea: {
    width: "100%",
    height: "120px",
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
    cursor: "pointer"
  }

};

export default MailForm;