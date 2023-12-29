"use client";

import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
import Image from "next/image";

export default function CustomCard({ title, button, pic, link }) {
  const styles = {
    main: {
      "@media only screen and (max-width: 600px)": {
        width: 300,
        backgroundColor: "#191A1B",
        border: "#191A1B",
      },
      "@media only screen and (min-width: 768px)": {
        width: 200,
        backgroundColor: "#191A1B",
        border: "#191A1B",
      },
      "@media only screen and (min-width: 992px)": {
        width: 300,
        backgroundColor: "#191A1B",
        border: "#191A1B",
      },
    },
    title: {
      "@media only screen and (max-width: 600px)": {
        color: "#fff",
        fontSize: "20px",
        fontWeight: "500",
      },
      "@media only screen and (min-width: 768px)": {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "500",
      },
      "@media only screen and (min-width: 992px)": {
        color: "#fff",
        fontSize: "22px",
        fontWeight: "500",
      },
    },
  };
  return (
    <Card sx={styles.main}>
      <div>
        <Typography sx={styles.title}>{title}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <Image src={pic} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <Link href={link} target="_blank" rel="noreferrer">
          <Button
            variant="solid"
            size="md"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
            style={{ color: "#000", backgroundColor: "#FFBD39" }}
          >
            {button}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
