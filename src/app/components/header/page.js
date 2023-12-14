"useClient";

import { Box } from "@mui/material";
import Link from "@mui/material/Link";

export default function page() {
  const styles = {
    main: {
      backgroundColor: "black",
      padding: "0px 45px 0px 45px",
    },
    mainNav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0.5rem 1rem",
    },
    nav: {
      padding: "11.2px 20px",
    },
    navLink: {
      color: "white",
      fontSize: "16px",
      padding: "11.2px 20px",
    },
    logo: {
      cursor: "pointer",
      color: "white",
      fontSize: "24px",
      fontWeight: "900",
      paddingTop: "0.7rem",
      paddingBottom: "0.7rem",
      marginRight: "1rem",
    },
  };
  return (
    <Box sx={styles.main}>
      <Box sx={styles.mainNav}>
        <Box sx={styles.logo}>MUKUL</Box>
        <Box sx={styles.nav}>
          <Link sx={styles.navLink} href="/" underline="none">
            Home
          </Link>
          <Link sx={styles.navLink} href="/components/about" underline="none">
            About
          </Link>
          <Link sx={styles.navLink} href="/components/skills" underline="none">
            Skills
          </Link>
          <Link
            sx={styles.navLink}
            href="/components/projects"
            underline="none"
          >
            Projects
          </Link>
          <Link sx={styles.navLink} href="/components/contact" underline="none">
            Contact
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
