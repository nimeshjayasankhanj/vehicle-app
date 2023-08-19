import {
  CardMedia,
  Box,
  Chip,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Paper,
} from "@mui/material";

import { Button, Card } from "src/components/atoms";
import { Vehicle } from "src/DTO/store";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
interface vehicleCardProps {
  value: Vehicle;
  showBidModal: (data: Vehicle) => void;
  viewItem: (data: Vehicle) => void;
}

export const VehicleCard = ({
  value,
  showBidModal,
  viewItem,
}: vehicleCardProps) => {
  return (
    <Card>
      <CardActionArea onClick={() => viewItem(value)}>
        <CardMedia
          sx={{ height: 240 }}
          image={
            value.details.image === ""
              ? process.env.REACT_APP_IMAGE
              : value.details.image
          }
          title={"image"}
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
            {value.name} {value.details.brand} {value.details.manufactureYear}
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
            <Chip
              label={value.details.description}
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
      </CardActionArea>
      <CardActions>
        <Button
          style={{ marginTop: "20px" }}
          fullWidth={true}
          onClick={() => showBidModal(value)}
        >
          <LocalAtmIcon />
          {""}
          Create Bidding
        </Button>
      </CardActions>
    </Card>
  );
};
