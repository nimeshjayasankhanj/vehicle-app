import { CardContent, Typography, Grid, Paper } from "@mui/material";

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
      <CardContent>
        <Grid container pb={3}>
          <Grid item xs={12} md={8} sm={8}>
            <img
              src={
                value.details.image === ""
                  ? process.env.REACT_APP_IMAGE
                  : value.details.image
              }
              alt="vehicle"
            />
          </Grid>
          <Grid item xs={12} md={4} sm={4}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                whiteSpace: "nowrap",
                fontWeight: "bold",
              }}
            >
              {value.name}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Description
            </Typography>
            <Typography gutterBottom component="div">
              {value.details.description}
            </Typography>
            <Typography gutterBottom component="div">
              {value.details.currency}:{" "}
              {value.details.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
            <Paper
              elevation={0}
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: value.details.color,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
              }}
            />

            <Button
              style={{ marginTop: "20px" }}
              fullWidth={false}
              onClick={() => showBidModal(value)}
            >
              <LocalAtmIcon />
              {""}
              Create Bidding
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
