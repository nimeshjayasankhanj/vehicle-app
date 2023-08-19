import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { Grid } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";

import { Vehicle } from "src/DTO/store";
import { Empty, Error, Loader } from "src/components/molecules";
import {
  BidModal,
  Categories,
  Pagination,
  VehicleCard,
} from "src/components/organisms";
import { vehicleService } from "src/services/vehicle-service";
import { AppDispatch, RootStore } from "src/store";
import { BidSchema } from "src/schema/BidSchema";
import { BIDPrice } from "src/DTO/bid";
import { toast } from "react-toastify";
import { markAsBid } from "src/store/slices/vehicle-slice";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/atoms";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const [vehicle, setVehicle] = useState({});
  const [price, setPrice] = useState<number>(0);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    vehicleLists();
  }, [search, selectedPage]);

  const vehicleLists = () => {
    const params = {
      search,
      selectedPage,
    };
    dispatch(vehicleService(params));
  };

  const { data, isLoading, isError } = useSelector(
    (state: RootStore) => state.vehicles
  );

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      bid_price: 0,
    },
    resolver: yupResolver(BidSchema(price)),
  });
  const onSubmit = (data: BIDPrice) => {
    const bidVehicle = {
      ...vehicle,
      bid_price: data.bid_price,
    };
    dispatch(markAsBid(bidVehicle));

    toast.success("Vehicle getting added to the Biddings");
    setIsShowModal(false);
    setVehicle({});
  };

  const showBidModal = (data: Vehicle) => {
    setIsShowModal(true);
    const newVehicleObject = {
      id: data.id,
      name: data.name,
      image: data.details.image,
      currency: data.details.currency,
      price: data.details.price,
      bid_price: 0,
      description: data.details.description,
    };
    setVehicle(newVehicleObject);
    setPrice(data.details.price);
  };

  const handleClose = () => {
    setIsShowModal(false);
    reset();
  };

  const handleChange = (value: string) => {
    setSearch(value);
  };

  const viewItem = (data: Vehicle) => {
    navigate(`/vehicle-detail/${data.id}`);
  };

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setSelectedPage(value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Grid container pb={3}>
        <Grid item xs={12} md={4} sm={4}>
          <Categories handleChange={handleChange} value={search} />
        </Grid>
        <Grid item xs={12} md={8} sm={8}>
          <Button
            style={{ float: "right" }}
            disabled={search === "" ? true : false}
            onClick={clearSearch}
          >
            <YoutubeSearchedForIcon />
            Clear Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        {data.length === 0 ? (
          <Grid item xs={12} md={12} sm={12}>
            <Empty />
          </Grid>
        ) : (
          data.map((value: Vehicle, index: number) => (
            <Grid item xs={12} md={3} sm={6} key={value.id}>
              <VehicleCard
                value={value}
                showBidModal={showBidModal}
                viewItem={viewItem}
              />
            </Grid>
          ))
        )}

        {isShowModal && (
          <BidModal
            handleSubmit={handleSubmit(onSubmit)}
            control={control}
            errors={errors}
            open={isShowModal}
            handleClose={handleClose}
            watch={watch}
          />
        )}
      </Grid>
      {data.length !== 0 && search === "" && (
        <Grid container pt={3}>
          <Grid item xs={12} md={12} sm={12}>
            <Pagination changePage={changePage} selectedPage={selectedPage} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Home;
