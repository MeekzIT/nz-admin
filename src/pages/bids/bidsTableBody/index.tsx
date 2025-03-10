import { Fragment } from "react";
import { BidsTableBodyProps } from "./types";
import { Checkbox, Skeleton, TableRow } from "@mui/material";
import { StyledTableCellBody } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../redux/hooke";
import {
  setElemetId,
  setTitleForQuestionModal,
  toggleModalStatus,
  setActionKey,
} from "../../../redux/slices/questionModalSlice";
import { QuestionModalActions } from "../../../types";
import { FetchEditBid } from "../../../redux/slices/bids/fetchService";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const BidsTableBody = ({ tableBodyData, loading }: BidsTableBodyProps) => {
  const dispatch = useAppDispatch();

  const openModalQuestionForDeleteContact = (contactId: number) => {
    dispatch(toggleModalStatus());
    dispatch(
      setTitleForQuestionModal({
        titleModal: "Իսկապե՞ս ուզում եք ջնջել ՀԱՅՏը:",
      })
    );
    dispatch(setElemetId({ id: contactId }));
    dispatch(setActionKey({ actionKey: QuestionModalActions.DELETE_BID }));
  };

  return (
    <>
      {tableBodyData?.map((item) => {
        return (
          <Fragment key={item.id}>
            {loading ? (
              <TableRow>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
              </TableRow>
            ) : (
              <TableRow>
                <StyledTableCellBody
                  status={item.check ? "isActive" : "InActive"}
                >
                  {item.createdAt.slice(0, 10)}
                </StyledTableCellBody>
                <StyledTableCellBody>{item.firstName}</StyledTableCellBody>
                <StyledTableCellBody>{item.lastName}</StyledTableCellBody>
                <StyledTableCellBody>{item.phone}</StyledTableCellBody>
                <StyledTableCellBody>info Բնակարան</StyledTableCellBody>
                <StyledTableCellBody>
                  <Checkbox
                    {...label}
                    checked={item.check}
                    onChange={() => {
                      const { id, firstName, lastName, phone, check } = item;
                      dispatch(
                        FetchEditBid({
                          id,
                          data: { firstName, lastName, phone, check: !check },
                        })
                      );
                    }}
                  />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <DeleteIcon
                    color="error"
                    sx={{ cursor: "pointer" }}
                    onClick={() => openModalQuestionForDeleteContact(item.id)}
                  />
                </StyledTableCellBody>
              </TableRow>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default BidsTableBody;
