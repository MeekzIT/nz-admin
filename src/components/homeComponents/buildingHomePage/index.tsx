import { useEffect, useState } from "react";
import { PageTitle } from "../../../commonStyles";
import { useAppDispatch, useAppSelector } from "../../../redux/hooke";
import {
  fetchEditAppartementData,
  fetchGetBuildingSchemaData,
} from "../../../redux/slices/homeBuilding/fetchService";
import {
  filterAppartementsFromFloor,
  handleChangeTextFildsAppartement,
} from "../../../redux/slices/homeBuilding";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
  TextField,
  Switch,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Loader from "../../common/loader";
import { AppartementDataForMap } from "./constants";

const label = { inputProps: { "aria-label": "Switch demo" } };

const BuildingHomePage = () => {
  const dispatch = useAppDispatch();
  const { appartements, loading, floors, appartementsInFloor } = useAppSelector(
    (state) => state.bomeBuilding
  );
  const [selectedFloor, setSelectFloor] = useState(3);
  const [expanded, setExpanded] = useState<number | false>(false);
  const [nestedExpanded, setNestedExpanded] = useState<number | false>(false);

  useEffect(() => {
    dispatch(fetchGetBuildingSchemaData());
  }, [dispatch]);

  useEffect(() => {
    if (appartements) {
      dispatch(filterAppartementsFromFloor(selectedFloor));
    }
  }, [dispatch, appartements, selectedFloor]);

  const handleChangeAccordion =
    (panel: number) => (_: unknown, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleChangeNestedAccordion =
    (panel: number) => (_: unknown, isExpanded: boolean) => {
      setNestedExpanded(isExpanded ? panel : false);
    };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageTitle>Բնակարաններ</PageTitle>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Հարկ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedFloor.toString()}
            label="Հարկ"
            onChange={(event) => setSelectFloor(Number(event.target.value))}
          >
            {floors?.length &&
              floors.map((floor) => {
                return (
                  <MenuItem value={floor.floor} key={floor.floor}>
                    {floor.floor}-րդ Հարկ
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Box>

      <Box>
        {appartementsInFloor?.map(
          ({ AppartementData, price, in_stock, id }, index) => {
            const isExpanded = expanded === index;
            return (
              <Accordion
                key={id}
                expanded={isExpanded}
                onChange={handleChangeAccordion(index)}
                sx={{ p: 2 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">Բնակարաններ - {id}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>Գին {price} դրամ</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      Նոր գին
                      <TextField
                        id="outlined-basic"
                        label="Նոր գին"
                        variant="outlined"
                        value={price}
                        onChange={(event) =>
                          dispatch(
                            handleChangeTextFildsAppartement({
                              id,
                              key: "price",
                              text: event.target.value,
                            })
                          )
                        }
                      />
                    </Box>
                    <Box>
                      {in_stock ? "Գնված չէ" : "Գնված է"}
                      <Switch
                        {...label}
                        checked={!in_stock}
                        onChange={(event) => {
                          dispatch(
                            handleChangeTextFildsAppartement({
                              id,
                              key: "in_stock",
                              booleanState: event.target.checked,
                            })
                          );
                        }}
                      />
                    </Box>
                  </Box>

                  <Accordion
                    expanded={nestedExpanded === id}
                    onChange={handleChangeNestedAccordion(id)}
                    sx={{ mt: 2 }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <Typography component="span">
                        լրացուցիչ տեղեկություններ բնակարանի մասին։
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {AppartementData.map(({ name, value, id }) => {
                        return (
                          <Box key={id} display={"flex"}>
                            {AppartementDataForMap[
                              name as keyof typeof AppartementDataForMap
                            ] ?? "Неизвестно"}
                            <p> - {value}</p>
                          </Box>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                </AccordionDetails>

                <Button
                  sx={{ float: "right", mt: 2 }}
                  variant="contained"
                  onClick={() =>
                    dispatch(
                      fetchEditAppartementData({
                        id,
                        data: { price, in_stock },
                      })
                    )
                  }
                >
                  Փոխել բնակարանի տվյալները
                </Button>
              </Accordion>
            );
          }
        )}
      </Box>
    </>
  );
};

export default BuildingHomePage;
