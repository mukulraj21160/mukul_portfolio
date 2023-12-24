"use client";

import { Box } from "@mui/material";
import Home from "./components/home/page";
import About from "./components/about/page";
import Skills from "./components/skills/page";
import Project from "./components/projects/page";
import Contact from "./components/contact/page";

export default function Client() {
  return (
    <Box>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </Box>
  );
}
