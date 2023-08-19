import { Box } from "@mui/material";
import { Control } from "react-hook-form";
import { BIDPrice } from "src/DTO/bid";
import { Button, Modal, TextBox } from "src/components/atoms";

interface BidModalProps {
  handleSubmit: () => void;
  control: Control<BIDPrice>;
  errors: any;
  open: boolean;
  handleClose: () => void;
  watch: Function;
}

export const BidModal = ({
  handleSubmit,
  control,
  errors,
  open,
  handleClose,
  watch,
}: BidModalProps) => {
  const bidValue = watch("bid_price");

  return (
    <Modal open={open} handleClose={handleClose}>
      <Box sx={{ pt: 2 }}>
        <form onSubmit={handleSubmit}>
          <TextBox
            control={control}
            error={errors?.bid_price?.message}
            type="number"
            name="bid_price"
          />
          <Button
            type="submit"
            style={{ marginTop: "20px" }}
            fullWidth={true}
            disabled={bidValue <= 0 ? true : false}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
