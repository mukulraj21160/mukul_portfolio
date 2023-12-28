"use client";

import { Box, Grid, Typography } from "@mui/material";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default function page() {
  const styles = {
    main: {
      "@media only screen and (max-width: 600px)": {
        color: "white",
      },
      "@media only screen and (min-width: 768px)": {
        //
      },
      "@media only screen and (min-width: 992px)": {
        color: "white",
        paddingBottom: "112px",
      },
    },
    skillsHeading: {
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
        //
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
    progress: {
      padding: "15px",
    },
    heading: {
      display: "flex",
      justifyContent: "space-between",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "500",
    },
    para: {
      display: "flex",
      justifyContent: "center",
    },
    paragraph: {
      "@media only screen and (max-width: 600px)": {
        color: "#999999",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.8",
        padding: "0px 15px",
      },
      "@media only screen and (min-width: 992px)": {
        textAlign: "center",
        color: "#999999",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.8",
        padding: "0px 112px",
      },
    },
  };
  return (
    <Box sx={styles.main}>
      <Typography sx={styles.skillsHeading}>My Skills</Typography>
      <Box>
        <Typography sx={styles.paragraph}>
          As with any field, a willingness to learn and a desire to stay
          up-to-date with the latest trends and technologies is crucial to
          succeed in Web Development.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} columns={12}>
          <Grid item md={1} lg={1}></Grid>

          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box sx={styles.progress}>
              <Typography sx={styles.heading}>
                Html
                <span>100%</span>
              </Typography>
              <Progress
                percent={100}
                status="success"
                theme={{
                  success: {
                    symbol: "90%",
                    color: "#ffbd39",
                  },
                }}
              />
            </Box>
            <Box sx={styles.progress}>
              <Typography sx={styles.heading}>
                JavaScript
                <span>75%</span>
              </Typography>
              <Progress
                percent={75}
                status="success"
                theme={{
                  success: {
                    symbol: ".",
                    color: "#ffbd39",
                  },
                }}
              />
            </Box>
            <Box sx={{ padding: "15px 15px 0px 15px" }}>
              <Typography sx={styles.heading}>
                NodeJs
                <span>30%</span>
              </Typography>
              <Progress
                percent={30}
                status="success"
                theme={{
                  success: {
                    symbol: "90%",
                    color: "#ffbd39",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Box sx={{ padding: "15px" }}>
              <Typography sx={styles.heading}>
                Css
                <span>80%</span>
              </Typography>
              <Progress
                percent={80}
                status="success"
                theme={{
                  success: {
                    symbol: "90%",
                    color: "#ffbd39",
                  },
                }}
              />
            </Box>
            <Box sx={styles.progress}>
              <Typography sx={styles.heading}>
                ReactJs
                <span>70%</span>
              </Typography>
              <Progress
                percent={70}
                status="success"
                theme={{
                  success: {
                    symbol: "90%",
                    color: "#ffbd39",
                  },
                }}
              />
            </Box>
            <Box sx={{ padding: "15px 15px 0px 15px" }}>
              <Typography sx={styles.heading}>
                MongoDB
                <span>85%</span>
              </Typography>
              <Progress
                percent={85}
                status="success"
                theme={{
                  success: {
                    symbol: "90%",
                    color: "#ffbd39",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item md={1} lg={1}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
