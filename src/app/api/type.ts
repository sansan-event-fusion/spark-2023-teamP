type userDetailParams = {
    userId: number,
};

type userDetailBody = void;

type userDetailResponse = {
  id: number,
  name: string,
  email: string,
  birthday: Date,
  introduction: string,
};

type userUpdateParams = {
    userId: number,
};

type userUpdateBody = {
    name: string,
    introduction: string,
    profileImage: string,
};

type userUpdateResponse = void;

type recruitmentListParams = void;
    
type recruitmentListBody = void;

type recruitmentListResponse = [
  {
    id: number,
    image: string,
    title: string,
    organizer: {
      name: string,
      profileImage: string,
    },
    created_at: Date,
    peopleLimit: number,
    participantsCount: number,
  }
];

type recruitmentCreateParams = void;

type recruitmentCreateBody = {
  title: string,
  description: string,
  area: string,
  peopleLimit: number,
  targets: {
    title: string,
  },
};

type recruitmentCreateResponse = void;

type recruitmentDetailParams = {
    recruitmentId: number,
};

type recruitmentDetailBody = void;

type recruitmentDetailResponse = {
  organizer: {
    id: number,
    name: string,
    image: string,
  },
  recruitment: {
    area: string,
    title: string,
    targets: [
      {
        title: string,
      }
    ],
    description: string,
    peopleLimit: number,
    participantsCount: number,
  },
};

type recruitmentUpdateParams = {
    recruitmentId: number,
};

type recruitmentUpdateBody = {
  title: string,
  description: string,
  area: string,
  peopleLimit: number,
  targets: [
    {
      title: string,
    }
  ],
};

type recruitmentUpdateResponse = void;

type recruitmentApplyParams = {
    recruitmentId: number,
};

type recruitmentApplyBody = {
    user_id: number,
};

type recruitmentApplyResponse = void;

type recruitmentSearchParams = {
    keyword: string,
};

type recruitmentSearchBody = void;

type recruitmentSearchResponse = {};

type roomDetailPrams = {
    roomId: number,
};

type roomDetailBody = void;

type roomDetailResponse = {
  users: [
    {
      id: number,
      name: string,
      profileImage: string,
    }
  ],
  messages: [
    {
      body: string,
      user_id: number,
      created_at: Date,
    }
  ],
};
