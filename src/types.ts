// File contains all the type of the components (Generic file to contain types)

export type CommunityResponse = {
  A: CommunityDetail[];
  B: CommunityDetail[];
};

export type CommunityDetail = {
  name: string;
  age: number;
  gender: string;
  photos: string[];
};

export type CommunityListProps = {
  expanded: boolean | string;
  communityName: string;
  communityData: CommunityDetail[];
  handleSearch: any;
  accordianHandleChange: any;
  key: number;
  theme: string;
};
