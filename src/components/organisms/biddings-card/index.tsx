import { CardMedia, Box, Chip, CardContent, Typography } from "@mui/material";

import { Card } from "src/components/atoms";
import { Bid } from "src/DTO/store";
interface BiddingsCardProps {
  value: Bid;
}

export const BiddingsCard = ({ value }: BiddingsCardProps) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 240 }}
        image={
          value.image === ""
            ? "https://stmartinblue.com/images/cars/default_car.jpg"
            : value.image
        }
        title={"title"}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            textOverflow: "ellipsis",
            overflow: " hidden",
            whiteSpace: "nowrap",
            textAlign: "center",
            fontWeight: "bold",
          }}
          aria-label="cocktail-name"
        >
          {value.name}
        </Typography>
        <Typography
          gutterBottom
          component="div"
          style={{
            textOverflow: "ellipsis",
            overflow: " hidden",
            whiteSpace: "nowrap",
            textAlign: "center",
            fontWeight: "bold",
          }}
          aria-label="cocktail-name"
        >
          {value.currency}:{" "}
          {value.price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
        <Box
          style={{
            textOverflow: "ellipsis",
            overflow: " hidden",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          <Chip
            label={value.description}
            size="small"
            sx={{
              backgroundColor: "#3b16b2",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};