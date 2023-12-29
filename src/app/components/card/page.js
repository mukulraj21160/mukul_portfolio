"use client";

import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
import Image from "next/image";

export default function page({ title, button, pic, link }) {
  return (
    <Card sx={{ width: 300, backgroundColor: "#191A1B", border: "#191A1B" }}>
      <div>
        <Typography level="title-lg" style={{ color: "#fff" }}>
          {title}
        </Typography>
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
