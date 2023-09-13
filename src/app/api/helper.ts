import { TArticle, TRecruitment, TRoomMessage } from "../type";
import { recruitmentList, recruitmentDetail, roomDetail } from "./client";

export async function getRecruitments(): Promise<TRecruitment[]> {
  const params = undefined;
  const body = undefined;
  const data = await recruitmentList(params, body);

  return data.map(
    ({
      id,
      image,
      title,
      organizer: { name, profileImage },
      created_at,
      peopleLimit,
      participantsCount,
    }) => ({
      id,
      name,
      user_id: 0,
      imgUrl: "",
      title,
      targets: [],
      peopleLimit,
      createdAt: created_at.toString(),
      updatedAt: "",
    })
  );
}

export async function getRoomChat(roomId: number): Promise<TRoomMessage[]> {
  const params = { roomId };
  const body = undefined;
  const { users, messages } = await roomDetail(params, body);

  return messages.map(({ body, user_id, created_at }) => {
    const user = users.find((user) => user.id === user_id);

    if (!user) {
      throw new Error("user not found");
    }

    return {
      user: {
        id: user.id,
        name: user.name,
        profileImage: user.profileImage,
      },
      body,
      created_at,
    };
  });
}

export async function getRecruitmentDetail(id: number): Promise<TArticle> {
  const params = { recruitmentId: id };
  const body = undefined;
  const data = await recruitmentDetail(params, body);

  return {
    user: {
      name: data.organizer.name,
      profileImageUrl: data.organizer.image,
    },
    recruitment: {
      imageUrl: "",
      title: data.recruitment.title,
      peopleLimit: data.recruitment.peopleLimit,
      participantsCount: data.recruitment.participantsCount,
      description: data.recruitment.description,
      targets: data.recruitment.targets,
      area: data.recruitment.area,
    },
  };
}
