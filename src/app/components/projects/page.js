"use client";

import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "@/app/components/card/page";
import hodlinfo from "../../assets/quadb.png";
import cri from "@/app/assets/cri.png";
import disney from "@/app/assets/disney.png";
import todo from "@/app/assets/todo.png";
import counter from "@/app/assets/counter.png";
import login from "@/app/assets/login.png";

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
    paragraph: {
      display: "flex",
      justifyContent: "center",
      color: "#999999",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.8",
    },
  };
  return (
    <Box sx={styles.main}>
      <Typography sx={styles.skillsHeading}>My Projects</Typography>
      <Box sx={styles.paragraph}>
        <Typography>
          These are just a few ideas, but the possibilities for Web Development
          projects are endless.
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        columns={12}
        style={{
          padding: "50px 18px",
        }}
      >
        <Grid item xs={4}>
          <ProjectCard
            title="HodlInfo Website Clone"
            button="View Project"
            link="https://project-quadb.vercel.app/"
            pic={hodlinfo}
          />
        </Grid>

        <Grid item xs={4}>
          <ProjectCard
            title="CRI Group Website Clone"
            button="View Project"
            link="https://project-net-art.vercel.app/"
            pic={cri}
          />
        </Grid>

        <Grid item xs={4}>
          <ProjectCard
            title="Disney+ Clone"
            button="View Project"
            link="https://disney-clone-omega.vercel.app/"
            pic={disney}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        columns={12}
        style={{ padding: "0px 18px 0px 18px" }}
      >
        <Grid item xs={4}>
          <ProjectCard
            title="ToDo List"
            button="View Project"
            link="https://todo-list-react-app.vercel.app/"
            pic={todo}
          />
        </Grid>

        <Grid item xs={4}>
          <ProjectCard
            title="Counter App"
            button="View Project"
            link="https://counter-react-app-mukulraj21160.vercel.app/"
            pic={counter}
          />
        </Grid>

        <Grid item xs={4}>
          <ProjectCard
            title="Simple Login Form"
            button="View Project"
            link="https://login-form-nine.vercel.app/"
            pic={login}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
