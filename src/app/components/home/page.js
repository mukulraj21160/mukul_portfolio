"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Mukul from "@/app/assets/mukul.jpg";

export default function page() {
  const styles = {
    main: {
      color: "white",
      "@media only screen and (min-width: 768px)": {
        padding: "80px 0px 80px 45px",
      },
      "@media only screen and (min-width: 992px)": {
        padding: "112px 0px 112px 45px",
      },
    },
    order: {
      "@media only screen and (max-width: 600px)": {
        order: 2,
      },
    },
    greeting: {
      "@media only screen and (max-width: 600px)": {
        textAlign: "center",
        paddingTop: "30px",
        color: "#ffbd39",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "3px",
        textTransform: "uppercase",
      },
      "@media only screen and (min-width: 768px)": {
        color: "#ffbd39",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "3px",
        textTransform: "uppercase",
      },
      "@media only screen and (min-width: 992px)": {
        color: "#ffbd39",
        fontSize: "14px",
        fontWeight: "600",
        letterSpacing: "3px",
        textTransform: "uppercase",
      },
    },
    nameHeading: {
      "@media only screen and (max-width: 600px)": {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        fontSize: "40px",
        fontWeight: "800",
      },
      "@media only screen and (min-width: 768px)": {
        display: "flex",
        alignItems: "baseline",
        fontSize: "40px",
        fontWeight: "800",
      },
      "@media only screen and (min-width: 992px)": {
        display: "flex",
        alignItems: "baseline",
        fontSize: "60px",
        fontWeight: "800",
      },
    },
    name: {
      "@media only screen and (max-width: 600px)": {
        color: "#ffbd39",
        paddingLeft: "20px",
        fontSize: "40px",
        fontWeight: "800",
      },
      "@media only screen and (min-width: 768px)": {
        color: "#ffbd39",
        paddingLeft: "20px",
        fontSize: "40px",
        fontWeight: "800",
      },
      "@media only screen and (min-width: 992px)": {
        color: "#ffbd39",
        paddingLeft: "20px",
        fontSize: "60px",
        fontWeight: "800",
      },
    },
    role: {
      "@media only screen and (max-width: 600px)": {
        textAlign: "center",
        color: "white",
        fontSize: "30px",
        padding: "20px",
      },
      "@media only screen and (min-width: 768px)": {
        color: "white",
        fontSize: "24px",
        fontWeight: "400",
      },
      "@media only screen and (min-width: 992px)": {
        color: "white",
        fontSize: "30px",
        fontWeight: "400",
      },
    },
    btn: {
      "@media only screen and (max-width: 600px)": {
        display: "flex",
        justifyContent: "space-evenly",
      },
    },
    button: {
      "@media only screen and (max-width: 600px)": {
        fontSize: "12px",
        letterSpacing: "2px",
        fontWeight: "600",
        lineHeight: "1.5",
        padding: "15px 30px 15px 30px",
        backgroundColor: "#ffbd39",
        color: "black",
        textTransform: "none",
        border: "1px solid",
        borderRadius: "40px",
        borderColor: "#ffbd39",
        "&:hover": {
          backgroundColor: "#ffbd39",
          color: "black",
        },
      },
      "@media only screen and (min-width: 768px)": {
        fontSize: "12px",
        letterSpacing: "2px",
        fontWeight: "600",
        lineHeight: "1.5",
        padding: "15px 30px 15px 30px",
        backgroundColor: "#ffbd39",
        color: "black",
        textTransform: "none",
        margin: "20px 0px 0px 20px",
        border: "1px solid",
        borderRadius: "40px",
        borderColor: "#ffbd39",
        "&:hover": {
          backgroundColor: "#ffbd39",
          color: "black",
        },
      },
      "@media only screen and (min-width: 992px)": {
        fontSize: "12px",
        letterSpacing: "2px",
        fontWeight: "600",
        lineHeight: "1.5",
        padding: "15px 30px 15px 30px",
        backgroundColor: "#ffbd39",
        color: "black",
        textTransform: "none",
        margin: "20px 0px 0px 20px",
        border: "1px solid",
        borderRadius: "40px",
        borderColor: "#ffbd39",
        "&:hover": {
          backgroundColor: "#ffbd39",
          color: "black",
        },
      },
    },
    button2: {
      "@media only screen and (max-width: 600px)": {
        fontSize: "12px",
        letterSpacing: "2px",
        fontWeight: "600",
        lineHeight: "1.5",
        padding: "15px ",
        color: "white",
        textTransform: "none",
        borderRadius: "40px",
        borderColor: "#fff",
        "&:hover": {
          background: "#ffbd39",
          borderColor: "#ffbd39",
          color: "black",
        },
      },
      "@media only screen and (min-width: 768px)": {
        fontSize: "12px",
        letterSpacing: "2px",
        fontWeight: "600",
        lineHeight: "1.5",
        padding: "15px 30px 15px 30px",
        color: "white",
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
      "@media only screen and (min-width: 992px)": {
        fontSize: "12px",
        letterSpacing: "2px",
        fontWeight: "600",
        lineHeight: "1.5",
        padding: "15px 30px 15px 30px",
        color: "white",
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
    },
    image: {
      "@media only screen and (max-width: 600px)": {
        display: "flex",
        justifyContent: "center",
        paddingTop: "30px",
        order: 1,
      },
    },
  };
  return (
    <Box sx={styles.main}>
      <Grid container columns={12}>
        <Grid item xs={12} sm={6} md={6} lg={6} sx={styles.order}>
          <Typography sx={styles.greeting}>Hello!</Typography>
          <Box sx={styles.nameHeading}>
            I&apos;m <Typography sx={styles.name}>Mukul Raj</Typography>
          </Box>
          <Typography sx={styles.role}>
            &quot;Full Stack Developer | React | Node | JavaScript |
            HTML/CSS&quot;
          </Typography>
          <Box sx={styles.btn}>
            <Button sx={styles.button} variant="contained">
              HIRE ME
            </Button>
            <Button sx={styles.button2} variant="outlined">
              MY WORKS
            </Button>
          </Box>
        </Grid>
        <Grid item lg={2}></Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} style={{ textAlign: "center" }}>
          <Box sx={styles.image}>
            <Image
              alt="custom image"
              src={Mukul}
              width={250}
              height={250}
              style={{
                borderRadius: "150px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
