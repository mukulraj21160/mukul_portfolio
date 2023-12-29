"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Contact1 from "@/app/assets/contact1.png";
import Contact2 from "@/app/assets/contact2.png";
import Contact3 from "@/app/assets/contact3.png";
import Contact4 from "@/app/assets/contact4.png";
import ContactPic from "../../assets/contact.png";
import Form from "../form/page";

export default function page() {
  const styles = {
    main: {
      "@media only screen and (max-width: 600px)": {
        color: "white",
        marginBottom: "1rem",
      },
      "@media only screen and (min-width: 768px)": {
        padding: "0px 45px 80px 45px",
      },
      "@media only screen and (min-width: 992px)": {
        color: "white",
        padding: "0px 45px 112px 45px",
      },
    },
    contactMeHeading: {
      "@media only screen and (max-width: 600px)": {
        color: "white",
        fontSize: "38px",
        fontWeight: "700",
        paddingLeft: "15px",
        lineHeight: "1.5",
        marginBottom: "1.5rem !important",
        marginTop: "1.5rem !important",
      },
      "@media only screen and (min-width: 768px)": {
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "1.5",
        marginTop: "55px",
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
    paragraph: {
      "@media only screen and (max-width: 600px)": {
        color: "#999999",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.8",
        padding: "0px 15px",
      },
      "@media only screen and (min-width: 768px)": {
        textAlign: "center",
        color: "#999999",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.8",
      },
      "@media only screen and (min-width: 992px)": {
        textAlign: "center",
        color: "#999999",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.8",
      },
    },
    card: {
      "@media only screen and (max-width: 600px)": {
        textAlign: "center",
        padding: "25px",
      },
      "@media only screen and (min-width: 768px)": {
        textAlign: "center",
        padding: "30px",
      },
      "@media only screen and (min-width: 992px)": {
        textAlign: "center",
        padding: "50px",
      },
    },
    contactHeading: {
      "@media only screen and (max-width: 600px)": {
        textAlign: "center",
      },
      "@media only screen and (min-width: 768px)": {
        textAlign: "center",
        padding: "0px 30px 30px 30px",
      },
      "@media only screen and (min-width: 992px)": {
        textAlign: "center",
        padding: "0px 30px 40px 30px",
      },
    },
    contactDetails: {
      "@media only screen and (max-width: 600px)": {
        textAlign: "center",
        color: "#999999",
        padding: "10px",
      },
      "@media only screen and (min-width: 768px)": {
        textAlign: "center",
        color: "#999999",
        paddingBottom: "40px",
      },
      "@media only screen and (min-width: 992px)": {
        textAlign: "center",
        color: "#999999",
        paddingBottom: "80px",
      },
    },
  };
  return (
    <Box sx={styles.main}>
      <Typography sx={styles.contactMeHeading}>Contact Me</Typography>
      <Box sx={styles.paragraph}>
        <Typography>
          Connect me through mentioned connecting sites and drop me just a
          message.
        </Typography>
      </Box>
      <Grid container columns={12}>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box sx={styles.card}>
            <Image src={Contact1} alt="contact snip" height={100} width={100} />
          </Box>
          <Box sx={styles.contactHeading}>
            <Typography>ADDRESS</Typography>
          </Box>
          <Box sx={styles.contactDetails}>
            <Typography>North-West, Delhi</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box sx={styles.card}>
            <Image src={Contact2} alt="contact snip" height={100} width={100} />
          </Box>
          <Box sx={styles.contactHeading}>
            <Typography>CONTACT NUMBER</Typography>
          </Box>
          <Box sx={styles.contactDetails}>
            <Typography>+91-84-4882-1160</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box sx={styles.card}>
            <Image src={Contact3} alt="contact snip" height={100} width={100} />
          </Box>
          <Box sx={styles.contactHeading}>
            <Typography>EMAIL ADDRESS</Typography>
          </Box>
          <Box sx={styles.contactDetails}>
            <Typography>mukulraj21160@gmail.com</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}>
          <Box sx={styles.card}>
            <Image src={Contact4} alt="contact snip" height={100} width={100} />
          </Box>
          <Box sx={styles.contactHeading}>
            <Typography>WEBSITE</Typography>
          </Box>
          <Box sx={styles.contactDetails}>
            <Typography>mukulraj.com</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container columns={12}>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ textAlign: "center" }}>
          <Image src={ContactPic} alt="contact snip" width={300} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ textAlign: "center", padding: "15px" }}
        >
          <Form />
        </Grid>
      </Grid>
    </Box>
  );
}
