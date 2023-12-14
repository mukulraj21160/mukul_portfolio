"useClient";

import { Box, Grid, Typography } from "@mui/material";

export default function page() {
  const styles = {
    main: {
      color: "white",
      padding: "112px 0px 112px 0px",
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
      <Grid container spacing={2} columns={16}>
        <Grid item xs={1}>
          1
        </Grid>
        <Grid item xs={14}>
          <Typography sx={styles.heading}>My Skills</Typography>
          <Typography sx={styles.paragraph}>
            As with any field, a willingness to learn and a desire to stay
            up-to-date with the latest trends and technologies is crucial
          </Typography>
          <Typography sx={styles.paragraphLine2}>
            to succeed in Web Development.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          2
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={1}>
          3
        </Grid>
        <Grid item xs={7}>
          <Typography sx={styles.heading}>My Skills</Typography>
          <Typography sx={styles.paragraph}>
            As with any field, a willingness to learn and a desire to stay
            up-to-date with the latest trends and technologies is crucial
          </Typography>
          <Typography sx={styles.paragraphLine2}>
            to succeed in Web Development.
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography sx={styles.heading}>My Skills</Typography>
          <Typography sx={styles.paragraph}>
            As with any field, a willingness to learn and a desire to stay
            up-to-date with the latest trends and technologies is crucial
          </Typography>
          <Typography sx={styles.paragraphLine2}>
            to succeed in Web Development.
          </Typography>
        </Grid>
        <Grid item xs={1}>
          4
        </Grid>
      </Grid>
    </Box>
  );
}
