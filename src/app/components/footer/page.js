"use client";

import React from "react";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

export default function page() {
  const styles = {
    main: {},
    heading: {
      "@media only screen and (max-width: 600px)": {
        fontSize: "26px",
        fontWeight: "700",
        padding: "15px 15px 0px 15px",
      },
      "@media only screen and (min-width: 992px)": {
        fontSize: "26px",
        fontWeight: "700",
        marginBottom: "15px",
      },
    },
    details: {
      "@media only screen and (max-width: 600px)": {
        color: "#999999",
        fontSize: "26px",
        fontWeight: "700",
        padding: "0px 15px 15px 15px",
      },
      "@media only screen and (min-width: 992px)": {
        color: "#999999",
        fontSize: "26px",
        fontWeight: "700",
        marginBottom: "15px",
      },
    },
    footer: {
      "@media only screen and (max-width: 600px)": {
        fontSize: "16px",
        lineHeight: "1.8",
        fontWeight: "400",
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.7)",
        marginTop: "1rem",
        padding: "15px",
      },
      "@media only screen and (min-width: 992px)": {
        fontSize: "16px",
        lineHeight: "1.8",
        fontWeight: "400",
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.7)",
        padding: "112px 0px 20px 0px",
        margin: "1rem",
      },
    },
  };
  const year = new Date().getFullYear();
  return (
    <Box>
      <Box sx={styles.main}>
        <Grid container columns={12}>
          <Grid item md={1} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography sx={styles.heading}>ADDRESS</Typography>
            <Box sx={styles.details}>
              <Typography>Kh No. 42, Street No-23,</Typography>
              <Typography>Block-D, Mukundpur Part-1,</Typography>
              <Typography>North West, Delhi-110042.</Typography>
            </Box>
          </Grid>
          <Grid item md={1} lg={1}></Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography sx={styles.heading}>CONTACT INFO</Typography>
            <Box sx={styles.details}>
              <Typography>Mukul Raj</Typography>
              <Typography>"Full Stack Developer"</Typography>
              <Typography>Phone: +91-84-4882-1160</Typography>
              <Typography>Email: mukulraj21160@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item md={1} lg={1}></Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography sx={styles.heading}>FOLLOW ME</Typography>
            <Box sx={styles.details}>
              <IconButton>
                <a
                  href="https://github.com/mukulraj21160"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <GitHubIcon style={{ fontSize: "25px", color: "#fff" }} />
                </a>
              </IconButton>
              <IconButton>
                <a
                  href="https://www.instagram.com/mukul.raj.60/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <InstagramIcon style={{ fontSize: "25px", color: "#fff" }} />
                </a>
              </IconButton>
              <IconButton>
                <a
                  href="https://wa.me/918448821160"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <WhatsAppIcon style={{ fontSize: "25px", color: "#fff" }} />
                </a>
              </IconButton>
              <IconButton>
                <Link
                  href="https://www.linkedin.com/in/mukul-raj-makodia-645449208/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <LinkedInIcon style={{ fontSize: "25px", color: "#fff" }} />
                </Link>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.footer}>
        <Typography>
          Copyright © {year} All rights reserved | This site is made by Mukul
        </Typography>
      </Box>
    </Box>
  );
}
