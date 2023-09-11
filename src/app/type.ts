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

export type TArticle = {
  user: {
    name: string,
    profileImageUrl: string
  },
  recruitment: {
    imageUrl: string,
    title: string,
    peopleLimit: number,
    participantsCount: number, 
    description: string,
    targets: {
        title: string
    }[],
    area: string
  }
}
