export interface AppartementData {
  appartementId: number;
  id: number;
  name: string;
  value: string;
  updatedAt: string;
  createdAt: string;
}

export interface Appartements {
  AppartementData: AppartementData[];
  coordinates: string;
  createdAt: string;
  floorId: number;
  id: number;
  image_black_white: string;
  image_design: string;
  in_stock: true;
  price: string;
  room_count: string;
  square_meter: string;
  updatedAt: string;
}

export interface AppartementsTypes {
  Appartements: Appartements[];
  floor: number;
  id: number;
  image_scheme: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface FloorsNumber {
  floor: number;
}

export type EditAppartementTypes = {
  price: string;
  in_stock: boolean;
};

export type HomeCreateSliterType = {
  image: string;
  mobile_image: string;
  titleAm: string;
  titleRu: string;
  titleEn: string;
  subTitleAm: string;
  subTitleRu: string;
  subTitleEn: string;
};

export type InitialStateTypes = {
  loading: boolean;
  appartements: AppartementsTypes[] | null;
  floors: FloorsNumber[] | null;
  appartementsInFloor: Appartements[] | null;
};
