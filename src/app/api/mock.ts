import { QueryClient } from 'react-query';
import * as type from "./type";

export const userDetailParams: type.UserDetailParams = {
    userId: 142
};

export const userDetailBody: type.UserDetailBody = undefined;

export const userDetailResponse: type.UserDetailResponse = {
  "id": 142,
  "name": "やぎ",
  "email": "yagi@gmail.com",
  "birthday": new Date("2002-04-09"),
  "introduction": "ドラム担当の大学3年生です！",
  "encryptedPassword": "62e1f0bd487c7c8d51a84416145d1f7f"
};

export const userUpdateParams: type.UserUpdateParams = {
    userId: 142
};

export const userUpdateBody: type.UserUpdateBody = {
  "name": "string",
  "introduction": "string",
  "profileImage": "string"
};

export const userUpdateResponse: type.UserUpdateResponse = undefined;

export const recruitmentListParams: type.RecruitmentListParams = undefined;

export const recruitmentListBody: type.RecruitmentListBody = undefined;

export const recruitmentListResponse: type.RecruitmentListResponse = [
  {
    "id": 0,
    "image": "string",
    "title": "string",
    "organizer": {
      "name": "string",
      "profileImage": "string"
    },
    "created_at": new Date("2019-08-24T14:15:22Z"),
    "peopleLimit": 0,
    "participantsCount": 0
  }
];

export const recruitmentCreateParams: type.RecruitmentCreateParams = undefined;

export const recruitmentCreateBody: type.RecruitmentCreateBody = {
  "title": "string",
  "description": "string",
  "area": "string",
  "peopleLimit": 0,
  "targets": {
    "title": "string"
  }
};

export const recruitmentCreateResponse: type.RecruitmentCreateResponse = undefined;

export const recruitmentDetailParams: type.RecruitmentDetailParams = {
    recruitmentId: 0
};

export const recruitmentDetailBody: type.RecruitmentDetailBody = undefined;

export const recruitmentDetailResponse: type.RecruitmentDetailResponse = {
  "organizer": {
    "id": 0,
    "name": "string",
    "image": "string"
  },
  "recruitment": {
    "area": "string",
    "title": "string",
    "targets": [
      {
        "title": "string"
      }
    ],
    "description": "string",
    "peopleLimit": 0,
    "participantsCount": 0
  }
};

export const recruitmentUpdateParams: type.RecruitmentUpdateParams = {
    recruitmentId: 0
};

export const recruitmentUpdateBody: type.RecruitmentUpdateBody = {
  "title": "string",
  "description": "string",
  "area": "string",
  "peopleLimit": 0,
  "targets": [
    {
      "title": "string"
    }
  ]
}; 

export const recruitmentUpdateResponse: type.RecruitmentUpdateResponse = undefined;

export const recruitmentApplyParams: type.RecruitmentApplyParams = {
    recruitmentId: 0
};

export const recruitmentApplyBody: type.RecruitmentApplyBody = {
    user_id: 142
};

export const recruitmentApplyResponse: type.RecruitmentApplyResponse = undefined;

export const recruitmentSearchParams: type.RecruitmentSearchParams = {
    keyword: "string"
};

export const recruitmentSearchBody: type.RecruitmentSearchBody = undefined;

export const recruitmentSearchResponse: type.RecruitmentSearchResponse = {};

export const roomDetailParams: type.RoomDetailParams = {
    roomId: 0
};

export const roomDetailBody: type.RoomDetailBody = undefined;

export const roomDetailResponse: type.RoomDetailResponse = {
    "users": [
        {
            "id": 0,
            "name": "string",
            "profileImage": "string"
        }
    ],
    "messages": [
        {
            "body": "string",
            "user_id": 0,
            "created_at": new Date("2019-08-24T14:15:22Z")
        }
    ]
};

const apiKinds: type.ApiKind[] = [
    "userDetail",
    "userUpdate",
    "recruitmentList",
    "recruitmentCreate",
    "recruitmentDetail",
    "recruitmentUpdate",
    "recruitmentApply",
    "recruitmentSearch",
    "roomDetail",
];

const mockData = {
    userDetail: {
        key: ["userDetail", userDetailParams, userDetailBody],
        response: userDetailResponse
    },
    userUpdate: {
        key: ["userUpdate", userUpdateParams, userUpdateBody],
        response: userUpdateResponse
    },
    recruitmentList: {
        key: ["recruitmentList", recruitmentListParams, recruitmentListBody],
        response: recruitmentListResponse
    },
    recruitmentCreate: {
        key: ["recruitmentCreate", recruitmentCreateParams, recruitmentCreateBody],
        response: recruitmentCreateResponse
    },
    recruitmentDetail: {
        key: ["recruitmentDetail", recruitmentDetailParams, recruitmentDetailBody],
        response: recruitmentDetailResponse
    },
    recruitmentUpdate: {
        key: ["recruitmentUpdate", recruitmentUpdateParams, recruitmentUpdateBody],
        response: recruitmentUpdateResponse
    },
    recruitmentApply: {
        key: ["recruitmentApply", recruitmentApplyParams, recruitmentApplyBody],
        response: recruitmentApplyResponse
    },
    recruitmentSearch: {
        key: ["recruitmentSearch", recruitmentSearchParams, recruitmentSearchBody],
        response: recruitmentSearchResponse
    },
    roomDetail: {
        key: ["roomDetail", roomDetailParams, roomDetailBody],
        response: roomDetailResponse
    },
};

export function getMockedQueryClient(targets: type.ApiKind[] = apiKinds) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                staleTime: Infinity
            }
        }
    });

    targets.forEach((target) => {
        queryClient.setQueryData(mockData[target].key, mockData[target].response);
    });

    return queryClient;
}