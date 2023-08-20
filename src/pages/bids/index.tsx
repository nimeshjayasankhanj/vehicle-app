import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Chip, Grid } from "@mui/material";

import { Bid } from "src/DTO/store";
import { Empty } from "src/components/molecules";
import { BiddingsCard } from "src/components/organisms";
import { RootStore } from "src/store";

const Biddings = () => {
  const { bids } = useSelector((state: RootStore) => state.vehicles);
  const [totalPrice, TotalPrice] = useState(0);

  const total = () => {
    let calculatedTotal = 0;
    for (const item of bids) {
      calculatedTotal += item.bid_price;
    }
    TotalPrice(calculatedTotal);
  };

  useEffect(() => {
    total();
  }, [bids]);

  if (bids.length === 0) {
    return <Empty />;
  }

  return (
    <>
      <Grid container pb={3}>
        <Grid item xs={12} md={12} sm={12}>
          <Chip
            label={`Total Bidding Count LKR: ${totalPrice.toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            )}`}
            size="small"
            sx={{
              backgroundColor: "#3b16b2",
              color: "white",
              textAlign: "left",
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        {bids.map((value: Bid, index: number) => (
          <Grid item xs={12} md={3} sm={6} key={value.id}>
            <BiddingsCard value={value} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Biddings;
