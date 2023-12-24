"use client";

import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function BasicCard({ title, button, pic, link }) {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{title}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={pic} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          {button} {link}
        </Button>
      </CardContent>
    </Card>
  );
}
