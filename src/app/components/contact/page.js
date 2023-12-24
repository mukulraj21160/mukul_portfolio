"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ContactSnip from "../../assets/contactSnip.png";
import ContactPic from "../../assets/contact.png";
import Form from "../form/page";

export default function page() {
  const styles = {
    main: {
      color: "white",
      padding: "0px 45px 112px 45px",
    },
    skillsHeading: {
      display: "flex",
      justifyContent: "center",
      color: "white",
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "1.5",
      marginTop: "0px",
      marginBottom: "1.5rem !important",
    },
    heading: {
      display: "flex",
      justifyContent: "center",
      color: "#ffbd39",
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "1.5",
      marginTop: "1rem !important",
      marginBottom: "1rem !important",
    },
    para: {
      display: "flex",
      justifyContent: "center",
    },
    paragraph: {
      display: "flex",
      justifyContent: "center",
      color: "#999999",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.8",
    },
    contact: {
      display: "flex",
      justifyContent: "center",
      paddingTop: "80px",
      paddingBottom: "40px",
    },
    contactHeading: {
      display: "flex",
      justifyContent: "space-around",
      paddingBottom: "40px",
    },
    contactDetails: {
      display: "flex",
      justifyContent: "space-around",
      color: "#999999",
      paddingBottom: "80px",
    },
    paragraphLine2: {
      display: "flex",
      justifyContent: "center",
      color: "#999999",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.8",
      marginBottom: "1rem",
    },
  };
  return (
    <Box sx={styles.main}>
      <Typography sx={styles.skillsHeading}>Contact Me</Typography>
      <Box sx={styles.paragraph}>
        <Typography>
          Connect me through mentioned connecting sites and drop me just a
          message.
        </Typography>
      </Box>
      <Box sx={styles.contact}>
        <Image src={ContactSnip} alt="contact snip" width={880} />
      </Box>
      <Box sx={styles.contactHeading}>
        <Typography>ADDRESS</Typography>
        <Typography>CONTACT NUMBER</Typography>
        <Typography>EMAIL ADDRESS</Typography>
        <Typography>WEBSITE</Typography>
      </Box>
      <Box sx={styles.contactDetails}>
        <Typography>Mukundpur, Delhi</Typography>
        <Typography>+91-84-4882-1160</Typography>
        <Typography>mukulraj21160@gmail.com</Typography>
        <Typography>mukulraj.com</Typography>
      </Box>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Image src={ContactPic} alt="contact snip" height={500} width={500} />
        </Grid>
        <Grid item xs={8}>
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
}
