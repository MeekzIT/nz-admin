import React, { useState } from "react";
import { TapsComponentProps } from "./types";
import { useAppDispatch } from "../../../redux/hooke";
import { StyledTextarea } from "../../../commonStyles";
import { getValue, isEmptyObject } from "../../../utils/objectUtils";
import { StyledTabs, StyledTab } from "./styles";

const TapsForChangeTextComponent = ({
  tabDataForMap,
  handleChangeProjectData,
  dataForChange,
  forCreateFlag = false,
}: TapsComponentProps) => {
  const [value, setValue] = useState<string>(tabDataForMap[0].value);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {!isEmptyObject(dataForChange) && (
        <>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            {tabDataForMap.map((tab) => (
              <StyledTab value={tab.value} label={tab.label} key={tab.label} />
            ))}
          </StyledTabs>

          <StyledTextarea
            sx={{ mb: 5, mt: 2 }}
            value={getValue(value, dataForChange)}
            onChange={(event) =>
              dispatch(
                handleChangeProjectData({
                  key: value,
                  text: event.target.value,
                  forCreateFlag,
                })
              )
            }
          />
        </>
      )}
    </>
  );
};

export default TapsForChangeTextComponent;
