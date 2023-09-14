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

export type TQuestionMessage = {
  body: string;
  created_at: Date;
};

export type TCondition = {
  keyword: string | undefined;
  targets: string[] | undefined;
};

export type TArticle = {
  user: {
    id: number;
    name: string;
    profileImageUrl: string;
  };
  recruitment: {
    imageUrl: string;
    title: string;
    peopleLimit: number;
    participantsCount: number;
    description: string;
    targets: string[];
    area: string;
  };
  participantIds: number[];
};

export type TUser = {
  id: number;
  name: string;
  email: string;
  birthday: Date;
  introduction: string;
};

export type TCredential = TUser & {
  authorization: string;
};
