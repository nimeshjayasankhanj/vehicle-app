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
        image={value.image === "" ? process.env.REACT_APP_IMAGE : value.image}
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
        >
          {value.name} {value.brand} {value.manufactureYear}
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
        >
          {value.currency}:{" "}
          {value.bid_price.toLocaleString(undefined, {
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
