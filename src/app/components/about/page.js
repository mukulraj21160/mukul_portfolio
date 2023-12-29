"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import AboutImg from "@/app/assets/about_me.png";

export default function page() {
  const styles = {
    main: {
      color: "white",
      "@media only screen and (min-width: 768px)": {
        padding: "0px 45px 80px 45px",
      },
      "@media only screen and (min-width: 992px)": {
        padding: "0px 45px 112px 45px",
      },
    },
    heading: {
      "@media only screen and (max-width: 600px)": {
        color: "white",
        fontSize: "38px",
        fontWeight: "700",
        paddingLeft: "15px",
        lineHeight: "1.5",
        marginTop: "1.5rem !important",
      },
      "@media only screen and (min-width: 768px)": {
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontSize: "50px",
        fontWeight: "700",
        lineHeight: "1.5",
        marginTop: "0px",
        marginBottom: "1.5rem !important",
      },
      "@media only screen and (min-width: 992px)": {
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontSize: "50px",
        fontWeight: "700",
        lineHeight: "1.5",
        marginTop: "0px",
        marginBottom: "1.5rem !important",
      },
    },
    mainGrid: {
      "@media only screen and (min-width: 992px)": {
        display: "flex",
        justifyContent: "center",
      },
    },
    about: {
      "@media only screen and (max-width: 600px)": {
        padding: "0px 15px 15px 15px",
      },
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
      "@media only screen and (max-width: 600px)": {
        padding: "15px",
      },
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
      <Grid container columns={12}>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <Box>
            <Image alt="custom image" src={AboutImg} height={320} width={320} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box sx={styles.about}>
            <Typography sx={styles.paragraph}>
              I am passionate about my work, and I am constantly seeking out new
              challenges and opportunities to expand my skillset and contribute
              to the Web Development Community.
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
              <Typography sx={styles.projHeading}>5</Typography>
              <Typography sx={styles.projHeading2}>
                Project&apos;s Completed
              </Typography>
            </Box>
            <Button variant="contained" sx={styles.button}>
              DOWNLOAD CV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
