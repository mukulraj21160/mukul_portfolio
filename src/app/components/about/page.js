"useClient";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Mukul from "../../assets/mukul.jpg";

export default function page() {
  const styles = {
    main: {
      color: "white",
      padding: "112px 0px 112px 0px",
    },
    heading: {
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
      color: "white",
      textTransform: "none",
      margin: "20px 0px 0px 20px",
      border: "1px solid",
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
      <Grid container spacing={2} columns={16}>
        <Grid item xs={6}>
          <Image alt="custom image" src={Mukul} height={200} width={200} />
          This Section is for image
        </Grid>
        <Grid item xs={10}>
          <Typography sx={styles.heading}>About Me</Typography>
          <Typography sx={styles.paragraph}>
            I am passionate about my work, and I am constantly seeking out new
            challenges and opportunities to expand my skillset and contribute to
            the Web Development Community.
          </Typography>
          <Box sx={styles.contact}>
            <Typography sx={styles.contactHeading}>Name:</Typography>
            <Typography sx={styles.contactHeading}>Email:</Typography>
            <Typography sx={styles.contactHeading}>Phone:</Typography>
            <Typography sx={styles.details}>Mukul Raj </Typography>
            <Typography sx={styles.details}>mukulraj21160@gmail.com</Typography>
            <Typography sx={styles.details}>+91-84-4882-1160</Typography>
          </Box>
          <Box sx={styles.mainHeading}>
            <Typography sx={styles.projHeading}>6</Typography>
            <Typography sx={styles.projHeading2}>
              Project's Completed
            </Typography>
          </Box>
          <Button sx={styles.button} variant="outlined">
            DOWNLOAD CV
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
