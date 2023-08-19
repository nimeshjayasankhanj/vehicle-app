import * as yup from "yup";

export const BidSchema: any = (value: number) =>
  yup.object().shape({
    bid_price: yup
      .number()
      .positive("Must be a positive value")
      .min(value, `Must be at least greater than ${value}`)
      .required("Required!"),
  });
