"use client";

import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "@/app/components/card/page";
import hodlinfo from "../../assets/quadb.png";
import cri from "@/app/assets/cri.png";
import disney from "@/app/assets/disney.png";
import todo from "@/app/assets/todo.png";
import counter from "@/app/assets/counter.png";

export default function page() {
  const styles = {
    main: {
      "@media only screen and (min-width: 992px)": {
        color: "white",
        paddingBottom: "112px",
      },
    },
    projectHeading: {
      "@media only screen and (max-width: 600px)": {
        color: "white",
        fontSize: "38px",
        fontWeight: "700",
        paddingLeft: "15px",
        lineHeight: "1.5",
        marginBottom: "1.5rem !important",
        marginTop: "1rem !important",
      },
      "@media only screen and (min-width: 768px)": {
        display: "flex",
        justifyContent: "center",
        color: "white",
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "1.5",
        marginTop: "0px",
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
        marginBottom: "1.5rem !important",
      },
      "@media only screen and (min-width: 992px)": {
        textAlign: "center",
        color: "#999999",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.8",
        marginBottom: "1.5rem !important",
      },
    },
    card: {
      "@media only screen and (max-width: 600px)": {
        display: "flex",
        justifyContent: "center",
        padding: "25px",
      },
      "@media only screen and (min-width: 768px)": {
        display: "flex",
        justifyContent: "center",
        padding: "25px",
      },
      "@media only screen and (min-width: 992px)": {
        display: "flex",
        justifyContent: "center",
        padding: "25px",
      },
    },
  };
  return (
    <Box sx={styles.main}>
      <Typography sx={styles.projectHeading}>My Projects</Typography>
      <Box sx={styles.paragraph}>
        <Typography>
          These are just a few ideas, but the possibilities for Web Development
          projects are endless.
        </Typography>
      </Box>
      <Grid container columns={12}>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={styles.card}>
          <ProjectCard
            title="HodlInfo Website Clone"
            button="View Project"
            link="https://project-quadb.vercel.app/"
            pic={hodlinfo}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={styles.card}>
          <ProjectCard
            title="CRI Group Website Clone"
            button="View Project"
            link="https://project-net-art.vercel.app/"
            pic={cri}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={styles.card}>
          <ProjectCard
            title="Disney+ Clone"
            button="View Project"
            link="https://disney-clone-omega.vercel.app/"
            pic={disney}
          />
        </Grid>
      </Grid>
      <Grid container columns={12}>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={styles.card}>
          <ProjectCard
            title="ToDo List"
            button="View Project"
            link="https://todo-list-react-app.vercel.app/"
            pic={todo}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} sx={styles.card}>
          <ProjectCard
            title="Counter App"
            button="View Project"
            link="https://counter-react-app-mukulraj21160.vercel.app/"
            pic={counter}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
