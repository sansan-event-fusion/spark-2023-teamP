import * as type from "./type";

export const userDetailResponse: type.UserDetailResponse = {
  "id": 142,
  "name": "やぎ",
  "email": "yagi@gmail.com",
  "birthday": new Date("2002-04-09"),
  "introduction": "ドラム担当の大学3年生です！",
  "encryptedPassword": "62e1f0bd487c7c8d51a84416145d1f7f"
};

export const userUpdateResponse: type.UserUpdateResponse = undefined;

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

export const recruitmentCreateResponse: type.RecruitmentCreateResponse = undefined;

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

export const recruitmentUpdateResponse: type.RecruitmentUpdateResponse = undefined;

export const recruitmentApplyResponse: type.RecruitmentApplyResponse = undefined;

export const recruitmentSearchResponse: type.RecruitmentSearchResponse = {};

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
