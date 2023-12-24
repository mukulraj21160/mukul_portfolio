"use client";

import { Box, Grid, Typography } from "@mui/material";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default function page() {
  const styles = {
    main: {
      color: "white",
      paddingBottom: "112px",
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
    progress: {
      padding: "15px 0px 10px 10px",
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
      display: "flex",
      justifyContent: "center",
      color: "#999999",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.8",
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
      <Typography sx={styles.skillsHeading}>My Skills</Typography>
      <Box sx={styles.paragraph}>
        <Typography>
          As with any field, a willingness to learn and a desire to stay
          up-to-date with the latest trends and technologies is crucial
        </Typography>
      </Box>
      <Box>
        <Typography sx={styles.paragraphLine2}>
          to succeed in Web Development.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={1}></Grid>
          <Grid item xs={7}>
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
            <Box sx={styles.progress}>
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
          <Grid item xs={7}>
            <Box sx={styles.progress}>
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
            <Box sx={styles.progress}>
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
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
