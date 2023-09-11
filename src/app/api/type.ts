export type ApiKind = "userDetail" | "userUpdate" | "recruitmentList" | "recruitmentCreate" | "recruitmentDetail" | "recruitmentUpdate" | "recruitmentApply" | "recruitmentSearch" | "roomDetail";

export type UserDetailParams = {
    userId: number,
};

export type UserDetailBody = void;

export type UserDetailResponse = {
    id: number,
    name: string,
    email: string,
    birthday: Date,
    introduction: string,
    encryptedPassword: string,
};

export type UserUpdateParams = {
    userId: number,
};

export type UserUpdateBody = {
    name: string,
    introduction: string,
    profileImage: string,
};

export type UserUpdateResponse = void;

export type RecruitmentListParams = void;

export type RecruitmentListBody = void;

export type RecruitmentListResponse = [
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

export type RecruitmentCreateParams = void;

export type RecruitmentCreateBody = {
    title: string,
    description: string,
    area: string,
    peopleLimit: number,
    targets: {
        title: string,
    },
};

export type RecruitmentCreateResponse = void;

export type RecruitmentDetailParams = {
    recruitmentId: number,
};

export type RecruitmentDetailBody = void;

export type RecruitmentDetailResponse = {
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

export type RecruitmentUpdateParams = {
    recruitmentId: number,
};

export type RecruitmentUpdateBody = {
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

export type RecruitmentUpdateResponse = void;

export type RecruitmentApplyParams = {
    recruitmentId: number,
};

export type RecruitmentApplyBody = {
    user_id: number,
};

export type RecruitmentApplyResponse = void;

export type RecruitmentSearchParams = void;

export type RecruitmentSearchBody = {
    keyword: string,
};

export type RecruitmentSearchResponse = {};

export type RoomDetailParams = {
    roomId: number,
};

export type RoomDetailBody = void;

export type RoomDetailResponse = {
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
