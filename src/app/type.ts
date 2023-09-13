export type TConfig = {
  mocked: boolean;
  loginDisabled: boolean;
};

export type TRecruitment = {
  id: number;
  name: string;
  user_id: number;
  imgUrl: string;
  title: string;
  targets: string[];
  peopleLimit: number;
  participantsCount: number;
  createdAt: string;
  updatedAt: string;
};

export type TRoomMessage = {
  user: {
    id: number;
    name: string;
    profileImage: string;
  };
  body: string;
  created_at: Date;
};

export type TArticle = {
  user: {
    name: string;
    profileImageUrl: string;
  };
  recruitment: {
    imageUrl: string,
    title: string,
    peopleLimit: number,
    participantsCount: number, 
    description: string,
    targets: string[],
    area: string
  }
};

export type TUser = {
  id: number;
  name: string;
  email: string;
  birthday: Date;
  introduction: string;
};

export type TCredential = TUser & {
  accessToken: string,
  authorization: string 
};
