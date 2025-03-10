export type BidsDataType = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  check: boolean;
};

export type EditBidsDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  check: boolean;
};

export type BidsInitioalStateTypes = {
  loading: boolean;
  bidsData: BidsDataType[] | null;
};
