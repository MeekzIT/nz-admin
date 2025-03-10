import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooke";
import {
  fetchCreateOfferData,
  fetchGetOfferData,
} from "../../../redux/slices/homeOffers/fetchService";
import MapCreateImages from "../../mapImagesData";
import AddImageBlock from "../../common/addImageBlock";
import { Box, Button } from "@mui/material";
import BaseModal from "../../common/modal";
import TapsForChangeImagesComponent from "../../common/tapsForChangeImagesComponent";
import { PageTitle } from "../../../commonStyles";
import { offerImageKey } from "./constants";
import {
  handleChangeTextFildsOffer,
  resetOfferForCreateData,
} from "../../../redux/slices/homeOffers";
import Loader from "../../common/loader";
import {
  setActionKey,
  setElemetId,
  setTitleForQuestionModal,
  toggleModalStatus,
} from "../../../redux/slices/questionModalSlice";
import { QuestionModalActions } from "../../../types";

const WeOffersHomePage = () => {
  const dispatch = useAppDispatch();
  const { allOfferData, offerForCreate, loading } = useAppSelector(
    (state) => state.homeOffer
  );
  const [isOpenCreateProjectModal, setIsOpenCreateProjectModal] =
    useState(false);

  useEffect(() => {
    dispatch(fetchGetOfferData());
  }, [dispatch]);

  const createOfferHandler = () => {
    dispatch(fetchCreateOfferData(offerForCreate)).then(() => {
      dispatch(fetchGetOfferData());
      setIsOpenCreateProjectModal(false);
      dispatch(resetOfferForCreateData());
    });
  };

  const openModalQuestionForDeleteContact = (id: number) => {
    dispatch(toggleModalStatus());
    dispatch(setTitleForQuestionModal({ titleModal: "Ջնջել լուսանկարը" }));
    dispatch(setElemetId({ id }));
    dispatch(setActionKey({ actionKey: QuestionModalActions.DELETE_OFFER }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      <PageTitle>Մենք առաջարկում ենք</PageTitle>
      <Box sx={{ display: "flex", gap: 2 }}>
        <MapCreateImages
          imagesData={allOfferData}
          setImageIdForDlete={openModalQuestionForDeleteContact}
        />
        <AddImageBlock
          action={() => setIsOpenCreateProjectModal(!isOpenCreateProjectModal)}
        />
      </Box>

      <BaseModal
        isOpen={isOpenCreateProjectModal}
        handleClose={() =>
          setIsOpenCreateProjectModal(!isOpenCreateProjectModal)
        }
        title="Ավելացնել նոր լուսանկար"
      >
        <Box m={2}>
          <TapsForChangeImagesComponent
            tabDataForMap={offerImageKey}
            dataForChange={offerForCreate}
            onChangeImageInObject={handleChangeTextFildsOffer}
            forCreateFlag
          />
          <Button variant="contained" onClick={createOfferHandler}>
            Պահպանել
          </Button>
        </Box>
      </BaseModal>
    </Box>
  );
};

export default WeOffersHomePage;
