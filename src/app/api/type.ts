export type ApiKind =
  | "userDetail"
  | "userUpdate"
  | "recruitmentList"
  | "recruitmentCreate"
  | "recruitmentDetail"
  | "recruitmentUpdate"
  | "recruitmentApply"
  | "recruitmentSearch"
  | "roomDetail";

export type SignInParams = void;

export type SignInBody = {
  email: string;
  password: string;
};

export type SignInResponse = {
  data: {
    email: string;
    provider: string;
    uid: string;
    profile_image: void;
    id: number;
    allow_password_change: boolean;
    name: string;
    birthday: string;
    introduction: string;
  };
};

export type ValidateTokenHeaders = {
    authorization: string,
};

export type ValidateTokenResponse = {
    data: {
        email: string,
        provider: string,
        uid: string,
        profile_image: void,
        id: number,
        allow_password_change: boolean,
        name: string,
        birthday: string,
        introduction: string,
    },
};

export type UserDetailParams = {
  userId: number;
};

export type UserDetailBody = void;

export type UserDetailResponse = {
  id: number;
  name: string;
  email: string;
  birthday: Date;
  introduction: string;
  encryptedPassword: string;
};

export type UserUpdateParams = {
  userId: number;
};

export type UserUpdateBody = {
  name: string;
  introduction: string;
  profileImage: string;
};

export type UserUpdateResponse = void;

export type RecruitmentListParams = void;

export type RecruitmentListBody = void;

export type RecruitmentListResponse = [
  {
    id: number;
    imageUrl: string;
    title: string;
    organizer: {
      name: string;
      profileImageUrl: string;
    };
    createdAt: string;
    peopleLimit: number;
    participantsCount: number;
  }
];

export type RecruitmentCreateParams = void;

export type RecruitmentCreateForm = {
  title: string;
  description: string;
  area: string;
  peopleLimit: number;
  targets: string[];
  userId: number;
  image: File;
};

export type RecruitmentCreateResponse = void;

export type RecruitmentDetailParams = {
  recruitmentId: number;
};

export type RecruitmentDetailBody = void;

export type RecruitmentDetailResponse = {
  organizer: {
    id: number;
    name: string;
    imageUrl: string;
  };
  recruitment: {
    area: string;
    title: string;
    targets: string[];
    description: string;
    peopleLimit: number;
    participantsCount: number;
    imageUrl: string;
  };
};

export type RecruitmentUpdateParams = {
  recruitmentId: number;
};

export type RecruitmentUpdateBody = {
  title: string;
  description: string;
  area: string;
  peopleLimit: number;
  targets: [
    {
      title: string;
    }
  ];
};

export type RecruitmentUpdateResponse = void;

export type RecruitmentApplyParams = {
  recruitmentId: number;
};

export type RecruitmentApplyBody = {
  userId: number;
};

export type RecruitmentApplyResponse = void;

export type RecruitmentSearchParams = void;

export type RecruitmentSearchBody = {
  keyword: string;
};

export type RecruitmentSearchResponse = {};

export type RoomDetailParams = {
  roomId: number;
};

export type RoomDetailBody = void;

export type QuestionDetailParams = {
  recruitmentId: number;
};

export type QuestionDetailBody = void;

export type RoomDetailResponse = {
  users: [
    {
      id: number;
      name: string;
      profileImage: string;
    }
  ];
  messages: [
    {
      body: string;
      user_id: number;
      created_at: Date;
    }
  ];
};