"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Mukul from "../../assets/mukul.jpg";

export default function page() {
  const styles = {
    main: {
      color: "white",
      padding: "0px 45px 112px 45px",
    },
    heading: {
      display: "flex",
      justifyContent: "center",
      color: "white",
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "1.5",
      marginTop: "0px",
      marginBottom: "1.5rem !important",
    },
    paragraph: {
      color: "#999999",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.8",
      marginBottom: "1rem",
    },
    name: {
      color: "#ffbd39",
      paddingLeft: "20px",
      fontSize: "60px",
      fontWeight: "800",
    },
    contact: {
      display: "flex",
      marginTop: "1.5rem",
    },
    contactHeading: {
      fontSize: "16px",
      fontWeight: "600",
      width: "130px",
      lineHeight: "1.8",
      marginBottom: "1rem",
    },
    details: {
      color: "#999999",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.8",
      marginBottom: "1rem",
    },
    mainHeading: {
      display: "flex",
      justifyContent: "left",
    },
    projHeading: {
      color: "#ffbd39",
      fontSize: "20px",
      fontWeight: "600",
    },
    projHeading2: {
      fontSize: "20px",
      paddingLeft: "5px",
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
      margin: "20px 0px 0px 20px",
      borderRadius: "40px",
      borderColor: "#fff",
      "&:hover": {
        background: "#ffbd39",
        borderColor: "#ffbd39",
        color: "black",
      },
    },
  };
  return (
    <Box sx={styles.main}>
      <Typography sx={styles.heading}>About Me</Typography>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={5}>
          <Image
            alt="custom image"
            src={Mukul}
            height={300}
            width={300}
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid item xs={11} style={{ paddingLeft: "80px" }}>
          <Typography sx={styles.paragraph}>
            I am passionate about my work, and I am constantly seeking out new
            challenges and opportunities to expand my skillset and contribute to
            the Web Development Community.
          </Typography>
          <Box sx={styles.contact}>
            <Box>
              <Typography sx={styles.contactHeading}>Name:</Typography>
              <Typography sx={styles.contactHeading}>Email:</Typography>
              <Typography sx={styles.contactHeading}>Phone:</Typography>
            </Box>
            <Box>
              <Typography sx={styles.details}>Mukul Raj </Typography>
              <Typography sx={styles.details}>
                mukulraj21160@gmail.com
              </Typography>
              <Typography sx={styles.details}>+91-84-4882-1160</Typography>
            </Box>
          </Box>
          <Box sx={styles.mainHeading}>
            <Typography sx={styles.projHeading}>6</Typography>
            <Typography sx={styles.projHeading2}>
              Project's Completed
            </Typography>
          </Box>
          <Button variant="contained" sx={styles.button}>
            DOWNLOAD CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
