"use client";

import React from "react";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function page() {
  const styles = {
    main: {
      display: "flex",
      backgroundColor: "black",
      color: "white",
    },
    heading: {
      fontSize: "26px",
      fontWeight: "700",
      marginBottom: "15px",
    },
    footer: {
      fontSize: "16px",
      lineHeight: "1.8",
      fontWeight: "400",
      textAlign: "center",
      color: "rgba(255, 255, 255, 0.7)",
      padding: "112px 0px 20px 0px",
      margin: "1rem",
    },
  };
  const year = new Date().getFullYear();
  return (
    <Box>
      <Box sx={styles.main}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={1}></Grid>
          <Grid item xs={4}>
            <Typography sx={styles.heading}>ADDRESS</Typography>
            <Box style={{ color: "#999999" }}>
              <Typography>Kh No. 42, Street No-23,</Typography>
              <Typography>Block-D, Mukundpur Part-1,</Typography>
              <Typography>North West, Delhi-110042.</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={4}>
            <Typography sx={styles.heading}>CONTACT INFO</Typography>
            <Box style={{ color: "#999999" }}>
              <Typography>Mukul Raj</Typography>
              <Typography>"Full Stack Developer"</Typography>
              <Typography>Phone: +91-84-4882-1160</Typography>
              <Typography>Email: mukulraj21160@gmail.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={4}>
            <Typography sx={styles.heading}>FOLLOW ME</Typography>
            <Box>
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
                <a
                  href="https://www.linkedin.com/in/mukul-raj-makodia-645449208/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <LinkedInIcon style={{ fontSize: "25px", color: "#fff" }} />
                </a>
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
