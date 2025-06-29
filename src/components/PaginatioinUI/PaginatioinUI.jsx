import React, { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";

export default function PaginatioinUI({
  allproperties,
  setPaginatedCart,
  PropNumberInEachPage,
}) {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    allproperties &&
      setPageCount(Math.ceil(allproperties.length / PropNumberInEachPage));
  }, [PropNumberInEachPage, allproperties]);

  useEffect(() => {
    allproperties &&
      setPaginatedCart(
        allproperties.slice(
          (page - 1) * PropNumberInEachPage,
          page * PropNumberInEachPage
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allproperties, page]);

  return (
    <div className="paginationContainer">
      <Stack spacing={2}>
        <Pagination
          className="paginationModel"
          sx={{
            "& .MuiPaginationItem-root": {
              "&.Mui-selected": {
                backgroundColor: "#01796f",
                color: "white",
              },
            },
          }}
          count={pageCount}
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}
