import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooke";
import {
  fetchEditAboutUsShortData,
  fetchGetAboutShortData,
} from "../../../redux/slices/homeAboutSlice/fetchService";
import { Box, Button } from "@mui/material";
import {
  BlockWithBackgroundBlend,
  Container,
  PageTitle,
} from "../../../commonStyles";
import TapsForChangeTextComponent from "../../common/tapsForChangeTextComponent";
import {
  aboutUsShortDataKeysForTabText,
  aboutUsShortImageDataKeysForTabText,
} from "./constants";
import { handleChangeTextFildsAboutUsShort } from "../../../redux/slices/homeAboutSlice";
import TapsForChangeImagesComponent from "../../common/tapsForChangeImagesComponent";
import Loader from "../../common/loader";

const AboutUsHome = () => {
  const dispatch = useAppDispatch();
  const { currentAboutUsData, loading } = useAppSelector(
    (state) => state.homeAbout
  );

  useEffect(() => {
    dispatch(fetchGetAboutShortData(1));
  }, [dispatch]);

  const saveDataHandler = () => {
    dispatch(fetchEditAboutUsShortData({ id: 1, data: currentAboutUsData! }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <PageTitle>ՄԵՐ ՄԱՍԻՆ</PageTitle>

      {currentAboutUsData && (
        <Container>
          <BlockWithBackgroundBlend>
            <TapsForChangeTextComponent
              handleChangeProjectData={handleChangeTextFildsAboutUsShort}
              tabDataForMap={aboutUsShortDataKeysForTabText}
              dataForChange={currentAboutUsData!}
            />
          </BlockWithBackgroundBlend>

          <BlockWithBackgroundBlend>
            <PageTitle>Լուսանկարներ</PageTitle>
            <TapsForChangeImagesComponent
              tabDataForMap={aboutUsShortImageDataKeysForTabText}
              dataForChange={currentAboutUsData!}
              onChangeImageInObject={handleChangeTextFildsAboutUsShort}
            />
          </BlockWithBackgroundBlend>

          <BlockWithBackgroundBlend sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              onClick={saveDataHandler}
              sx={{ p: 2, width: "100%" }}
              color="success"
            >
              Պահպանել
            </Button>
          </BlockWithBackgroundBlend>
        </Container>
      )}
    </Box>
  );
};

export default AboutUsHome;
