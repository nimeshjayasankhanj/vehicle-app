export type VehicleSlice = {
  data: Vehicle[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  bids: Bid[];
  vehicle: Vehicle;
};

export type Vehicle = {
  id: string;
  name: string;
  details: {
    currency: string;
    price: number;
    color: string;
    brand: string;
    manufactureYear: string;
    image: string;
    description: string;
  };
};

export type Bid = {
  id: string;
  name: string;
  image: string;
  currency: string;
  price: number;
  bid_price: number;
  description: string;
};
