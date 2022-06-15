import * as React from "react";
import { Pagination } from "@mui/material";

function PaginationComp(props) {
  return (
    <div>
      <Pagination
        className="pagination"
        count={props.count}
        color="primary"
        onChange={props.handleChangePage}
        siblingCount={10}
      />
    </div>
  );
}

export default PaginationComp;
