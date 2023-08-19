import { OutlinedInput, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface TextBoxProps {
  control: Control<any>;
  error: string | undefined;
  type?: string;
  name: string;
}
export const TextBox = ({
  control,
  error,
  type = "text",
  name,
}: TextBoxProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <OutlinedInput
            error={error ? true : false}
            endAdornment={"LKR"}
            size="small"
            fullWidth
            type={type}
            {...field}
          />
        )}
      />
      <Typography variant="subtitle2" color="red">
        {error}
      </Typography>
    </>
  );
};
