import React from "react"
import { useEffect, } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooke"
import { fetchSaveInfoAboutUs, fetchGetInfoAboutUs } from "../../redux/slices/aboutSlice/fetchService"
import Loader from "../../components/common/loader"
import { Box, Button, } from "@mui/material"
import { Container, PageTitle, } from "../../commonStyles"
import TapsForChangeTextComponent from "../../components/common/tapsForChangeTextComponent"
import { imagesDataForTabs, textsDataForTabs } from "./constants"
import { handleChangeAboutPageData } from "../../redux/slices/aboutSlice"
import TapsForChangeImagesComponent from "../../components/common/tapsForChangeImagesComponent"

const AboutPage = () => {
  const dispatch = useAppDispatch()
  const aboutPageData = useAppSelector((state) => state.about)

  useEffect(() => {
    dispatch(fetchGetInfoAboutUs())
  }, [dispatch])


  const saveAboutUsDataHandler = () => {
    if (aboutPageData.aboutData) {
      dispatch(fetchSaveInfoAboutUs(aboutPageData.aboutData))
    }
  }
  if (aboutPageData.loading) {
    return <Loader />
  }

  return (
    <>
      <PageTitle>ՄԵՐ ՄԱՍԻՆ</PageTitle>
      {aboutPageData.aboutData &&
        <>
          <Container>
            <Box sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              padding: "10px",
            }}>

              <TapsForChangeTextComponent handleChangeProjectData={handleChangeAboutPageData} tabDataForMap={textsDataForTabs} dataForChange={aboutPageData.aboutData as object} />
            </Box>
            <Box sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              padding: "10px",
            }}>
              <TapsForChangeImagesComponent tabDataForMap={imagesDataForTabs} dataForChange={aboutPageData.aboutData} onChangeImageInObject={handleChangeAboutPageData} />
            </Box>
          </Container>

          <Box sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: "12px",
            padding: "10px",
          }}>
            <Button variant="contained" color="success" fullWidth onClick={saveAboutUsDataHandler}>Պահպանեք տվյալները</Button>
          </Box>
        </>
      }
    </>
  )
}

export default AboutPage
