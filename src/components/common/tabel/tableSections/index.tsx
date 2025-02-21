import { FC } from "react";
import { Skeleton, TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "./styles";
import {  TableSectionsNamesProps } from "./types";

const TableSectionsNames: FC<TableSectionsNamesProps> = ({ loadingExperts, rowNamesData }) => {
  return (
    <TableHead>
      <TableRow>
        {rowNamesData.map(({ name }) => {
          return !loadingExperts ? (
            <StyledTableCell key={name} align="left">
              {name}
            </StyledTableCell>
          ) : (
            <StyledTableCell key={name} align="left">
              <Skeleton   animation="wave"/>
            </StyledTableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableSectionsNames;
