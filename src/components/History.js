import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [emails, setEmails] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/history")
      .then((response) => {

        setEmails(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, []);

  return (

    <div style={styles.container}>

      <h1 style={styles.heading}>
        Email History
      </h1>

      <div style={styles.cardContainer}>

        {
          emails.length === 0
          ? (
            <p style={styles.noData}>
              No Email History Found
            </p>
          )
          : (
            emails.map((email, index) => (

              <div key={index} style={styles.card}>

                <h2 style={styles.subject}>
                  {email.subject}
                </h2>

                <p style={styles.body}>
                  {email.body}
                </p>

                <p style={styles.recipients}>
                  <strong>Recipients:</strong>
                  {" "}
                  {email.recipients.join(", ")}
                </p>

                <p style={styles.status}>
                  Status:
                  {" "}
                  {email.status}
                </p>

              </div>

            ))
          )
        }

      </div>

    </div>

  );

}

const styles = {

  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "#f4f7fb",
    fontFamily: "Arial"
  },

  heading: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "40px",
    color: "#333"
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px"
  },

  card: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
  },

  subject: {
    color: "#7f5af0",
    marginBottom: "15px"
  },

  body: {
    color: "#555",
    marginBottom: "15px"
  },

  recipients: {
    color: "#333",
    marginBottom: "10px"
  },

  status: {
    color: "green",
    fontWeight: "bold"
  },

  noData: {
    textAlign: "center",
    fontSize: "20px",
    color: "#777"
  }

};

export default History;