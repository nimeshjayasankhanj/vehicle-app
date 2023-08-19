import { Card as CardComponent } from "@mui/material";
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <CardComponent>{children}</CardComponent>;
};
