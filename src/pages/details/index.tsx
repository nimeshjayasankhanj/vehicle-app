import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { VehicleDetails } from "src/components/organisms";
import { Vehicle } from "src/DTO/store";
import { Error, Loader } from "src/components/molecules";
import { BidModal } from "src/components/organisms";
import { getSingleVehicle } from "src/services/vehicle-service";
import { AppDispatch, RootStore } from "src/store";
import { BidSchema } from "src/schema/BidSchema";
import { BIDPrice } from "src/DTO/bid";
import { toast } from "react-toastify";
import { markAsBid } from "src/store/slices/vehicle-slice";
import { useNavigate, useParams } from "react-router-dom";

const ViewDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isShowModal, setIsShowModal] = useState(false);
  const [vehicleDetails, setVehicle] = useState({});
  const [price, setPrice] = useState<number>(0);
  const { id } = useParams();
  useEffect(() => {
    vehicleLists();
  }, []);

  const vehicleLists = () => {
    dispatch(getSingleVehicle(id));
  };

  const { vehicle, isLoading, isError } = useSelector(
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
      ...vehicleDetails,
      bid_price: data.bid_price,
    };
    dispatch(markAsBid(bidVehicle));

    toast.success("Vehicle getting added to the Biddings");
    setIsShowModal(false);
    setVehicle({});
    navigate("/");
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

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <>
      <VehicleDetails value={vehicle} showBidModal={showBidModal} />
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
    </>
  );
};

export default ViewDetails;
