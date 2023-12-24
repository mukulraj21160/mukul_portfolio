"use client";

import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function page() {
  const styles = {
    main: {
      backgroundColor: "#f8f9fa",
      padding: "45px 45px 45px 45px",
      borderRadius: "10px",
    },
    input: {
      backgroundColor: "white",
      marginBottom: "20px",
    },
    button: {
      fontSize: "12px",
      letterSpacing: "2px",
      fontWeight: "600",
      lineHeight: "1.5",
      padding: "1rem",
      backgroundColor: "#ffbd39",
      color: "black",
      textTransform: "none",
      borderRadius: "40px",
      borderColor: "#fff",
      "&:hover": {
        background: "#ffbd39",
        borderColor: "#ffbd39",
        color: "black",
      },
    },
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <Box sx={styles.main}>
      <Box sx={styles.formBox}>
        <Box sx={styles.textField}>
          <TextField
            sx={styles.input}
            id="fullWidth"
            fullWidth
            label="Name"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            sx={styles.input}
            id="fullWidth"
            fullWidth
            label="Phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <TextField
            sx={styles.input}
            id="fullWidth"
            fullWidth
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            sx={styles.input}
            id="fullWidth"
            fullWidth
            label="Message"
            value={message}
            onChange={handleMessageChange}
          />
        </Box>
        <Button variant="contained" sx={styles.button}>
          SEND MESSAGE
        </Button>
      </Box>
    </Box>
  );
}
