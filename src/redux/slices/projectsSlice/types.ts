export type ProjectsDataType = {
  id: number;
  titleAm: string;
  titleRu: string;
  titleEn: string;
  textAm_1: string;
  textRu_1: string;
  textEn_1: string;
  image_11: string;
  image_12: string;
  image_13: string;
  image_14: string;
  textAm_2: string;
  textRu_2: string;
  textEn_2: string;
  image_21: string;
  image_22: string;
  image_23: string;
  image_24: string;
};

export type CreateNewProjectsType = {
  titleAm: string;
  titleRu: string;
  titleEn: string;
  textAm_1: string;
  textRu_1: string;
  textEn_1: string;
  image_11: string;
  image_12: string;
  image_13: string;
  image_14: string;
  textAm_2: string;
  textRu_2: string;
  textEn_2: string;
  image_21: string;
  image_22: string;
  image_23: string;
  image_24: string;
};

export type ProjectsNamesType = {
  id: number;
  titleAm: string;
};

export type ProjectsInitialState = {
  projectsNames: ProjectsNamesType[];
  currentProject: ProjectsDataType;
  createProectdata: CreateNewProjectsType;
  loading: boolean;
};
