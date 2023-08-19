import { Stack } from "@mui/material";
import React from "react";
import { Pagination as Paginate } from "@mui/material";

interface PaginationProps {
  changePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  selectedPage: number;
}
export const Pagination = ({ changePage, selectedPage }: PaginationProps) => {
  return (
    <Stack spacing={2}>
      <Paginate
        count={2}
        color="primary"
        onChange={changePage}
        page={selectedPage}
      />
    </Stack>
  );
};
