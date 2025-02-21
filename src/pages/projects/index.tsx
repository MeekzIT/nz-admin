import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooke"
import { fetchChangeInfoProjects, fetchCreateNewProject, fetchGetInfoProject, fetchGetInfoProjects } from "../../redux/slices/projectsSlice/fetchService"
import { BlockWithBackgroundBlend, Container, PageTitle } from "../../commonStyles"
import Loader from "../../components/common/loader"
import { handleChangeProjectData, resetCurrentProjectData } from "../../redux/slices/projectsSlice"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import BaseModal from "../../components/common/modal"
import { imagesDataForMapInTapsComponent, textDataForMapInTapsComponent } from "./constants"
import { isEmptyObject } from "../../utils/objectUtils"
import TapsForChangeTextComponent from "../../components/common/tapsForChangeTextComponent"
import TapsForChangeImagesComponent from "../../components/common/tapsForChangeImagesComponent"
import { toggleModalStatus, setTitleForQuestionModal, setElemetId, setActionKey } from "../../redux/slices/questionModalSlice"
import { QuestionModalActions } from "../../types"

const ProjectsPage = () => {
    const dispatch = useAppDispatch()
    const dataProjects = useAppSelector((state) => state.projects)
    const { projectsNames, loading, currentProject, createProectdata } = dataProjects

    const [isOpenCreateProjectModal, setIsOpenCreateProjectModal] = useState(false)
    const [currentProjectId, setCurrentProjectId] = useState("");

    useEffect(() => {
        if (projectsNames.length > 0) {
            setCurrentProjectId(projectsNames[0].id.toString())
        }
    }, [projectsNames])

    useEffect(() => {
        return () => {
            setCurrentProjectId("")
            dispatch(resetCurrentProjectData())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchGetInfoProjects())
    }, [dispatch])

    useEffect(() => {
        if (currentProjectId) {
            dispatch(fetchGetInfoProject(Number(currentProjectId)))
        }
    }, [currentProjectId, dispatch])


    const handleChangeCurrentProduct = (event: SelectChangeEvent) => {
        setCurrentProjectId(event.target.value as string);
    };

    const saveDataHandler = () => {
        if (currentProject) {
            dispatch(fetchChangeInfoProjects({ productId: Number(currentProjectId), data: currentProject }))
        }
    }

    const createNewProject = () => {
        dispatch(fetchCreateNewProject(createProectdata)).then(() => {
            dispatch(fetchGetInfoProjects())
        })
        setIsOpenCreateProjectModal(false)
    }

    const openModalQuestionForDeleteContact = () => {
        dispatch(toggleModalStatus())
        dispatch(setTitleForQuestionModal({ titleModal: "Դուք իսկապես ցանկանում եք ջնջել նախագիծը?" }))
        dispatch(setElemetId({ id: Number(currentProjectId) }))
        dispatch(setActionKey({ actionKey: QuestionModalActions.DELETE_PROJECT }))
    }


    if (loading) {
        return <Loader />
    }

    return (
        <>
            <PageTitle sx={{ textAlign: "right" }}>ՆԱԽԱԳԾԵՐ</PageTitle>
            <Button sx={{ textAlign: "right", mb: 5 }} variant="contained" onClick={() => setIsOpenCreateProjectModal(!isOpenCreateProjectModal)}>Ավելացրեք նախագիծ</Button>

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Նախագծեր</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentProjectId}
                        label="Նախագծեր"
                        onChange={handleChangeCurrentProduct}
                    >
                        {projectsNames.length && projectsNames.map((product) => {
                            return (
                                <MenuItem value={product.id} key={product.id}>{product.titleAm}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>

            {!isEmptyObject(currentProject) &&
                <Container>
                    <BlockWithBackgroundBlend>
                        <TapsForChangeTextComponent handleChangeProjectData={handleChangeProjectData} tabDataForMap={textDataForMapInTapsComponent} dataForChange={currentProject} />
                    </BlockWithBackgroundBlend>
                    <BlockWithBackgroundBlend>
                        <PageTitle>Լուսանկարներ</PageTitle>
                        <TapsForChangeImagesComponent tabDataForMap={imagesDataForMapInTapsComponent} dataForChange={currentProject} onChangeImageInObject={handleChangeProjectData} />
                    </BlockWithBackgroundBlend>
                    <BlockWithBackgroundBlend sx={{ display: "flex", gap: 2 }}>
                        <Button variant="contained" onClick={saveDataHandler} sx={{ p: 2, width: "100%" }} color="success">Պահպանել</Button>
                        <Button variant="contained" onClick={openModalQuestionForDeleteContact} sx={{ p: 2, width: "100%" }} color="error">Ջնջել նախագիծը</Button>
                    </BlockWithBackgroundBlend>

                </Container >}

            <BaseModal
                isOpen={isOpenCreateProjectModal}
                handleClose={() => setIsOpenCreateProjectModal(!isOpenCreateProjectModal)}
                title="Ավելացնել նոր նախագիծ"
            >
                <Box m={2}>
                    <TapsForChangeTextComponent handleChangeProjectData={handleChangeProjectData} tabDataForMap={textDataForMapInTapsComponent} dataForChange={createProectdata} forCreateFlag />
                    <TapsForChangeImagesComponent tabDataForMap={imagesDataForMapInTapsComponent} dataForChange={createProectdata} onChangeImageInObject={handleChangeProjectData} forCreateFlag />
                    <Button variant="contained" onClick={createNewProject}>Պահպանել</Button>
                </Box>
            </BaseModal >
        </>
    )
}

export default ProjectsPage
