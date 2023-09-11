export type TRecruitment = {
  id: number;
  name: string;
  user_id: number;
  imgUrl: string;
  title: string;
  peopleLimit: number;
  createdAt: string;
  updatedAt: string;
};

export type TRoomMessage = {
  user: {
    id: number,
    name: string,
    profileImage: string
  }
  body: string,
  created_at: Date,
};
