import { MenuItem, Select } from "@mui/material";

interface CategoriesProps {
  handleChange: (value: string) => void;
  value: string;
}
export const Categories = ({ handleChange, value }: CategoriesProps) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      label="Age"
      onChange={(e) => handleChange(e.target.value)}
      fullWidth
    >
      <MenuItem value={""} disabled>
        Select Type Here
      </MenuItem>
      <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
      <MenuItem value={"Audi"}>Audi</MenuItem>
      <MenuItem value={"Ford"}>Ford</MenuItem>
      <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
      <MenuItem value={"BMW"}>BMW</MenuItem>
    </Select>
  );
};
