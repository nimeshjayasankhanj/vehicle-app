import { CardMedia, Box, CardContent, Typography } from "@mui/material";

import { Button, Card } from "src/components/atoms";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { Vehicle } from "src/DTO/store";

interface vehicleCardProps {
  value: Vehicle;
  showBidModal: (data: Vehicle) => void;
}
export const VehicleDetails = ({ value, showBidModal }: vehicleCardProps) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 940 }}
        image={
          value.details.image === ""
            ? "https://stmartinblue.com/images/cars/default_car.jpg"
            : value.details.image
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
          {value.details.currency}:{" "}
          {value.details.price.toLocaleString(undefined, {
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
          <Typography>{value.details.description}</Typography>
          <Typography>Color: {value.details.color}</Typography>
        </Box>

        <Button
          style={{ marginTop: "20px" }}
          fullWidth={true}
          onClick={() => showBidModal(value)}
        >
          <LocalAtmIcon />
          {""}
          Add Bid
        </Button>
      </CardContent>
    </Card>
  );
};
