import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooke";
import ImageModalComponent from "../imageUploadModal";
import { TapsForChangeImagesComponentProps } from "./types";
import {
  StyledTabs,
  StyledTab,
  StyledAvatarWrapper,
  StyledAvatar,
} from "./styles";
import { Box } from "@mui/material";
import { getValue, isEmptyObject } from "../../../utils/objectUtils";

const TapsForChangeImagesComponent = ({
  tabDataForMap,
  dataForChange,
  onChangeImageInObject,
  forCreateFlag = false,
}: TapsForChangeImagesComponentProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [value, setValue] = useState<string>(
    Object.values(tabDataForMap)[0].value || ""
  );
  const dispatch = useAppDispatch();

  const handleChange = (_: unknown, newValue: string) => {
    setValue(newValue);
  };

  const handleChangeImageField = (newValue: string) => {
    dispatch(
      onChangeImageInObject({ key: value, text: newValue, forCreateFlag })
    );
    setIsOpenModal(false);
  };

  return (
    <>
      {!isEmptyObject(dataForChange) && (
        <Box>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="secondary tabs example"
          >
            {tabDataForMap.map((tab) => (
              <StyledTab value={tab.value} label={tab.label} key={tab.label} />
            ))}
          </StyledTabs>

          <StyledAvatarWrapper onClick={() => setIsOpenModal(true)}>
            <StyledAvatar
              src={getValue(value as keyof typeof dataForChange, dataForChange)}
              variant="square"
            />
          </StyledAvatarWrapper>

          <ImageModalComponent
            open={isOpenModal}
            handleClose={() => setIsOpenModal(false)}
            handleImageChange={handleChangeImageField}
            name="qurduli"
          />
        </Box>
      )}
    </>
  );
};

export default TapsForChangeImagesComponent;
