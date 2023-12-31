import {
  TArticle,
  TRecruitment,
  TRoomMessage,
  TCredential,
  TQuestionMessage,
  TCondition,
} from "../type";
import * as client from "./client";

export async function signin(
  email: string,
  password: string
): Promise<TCredential> {
  const params = undefined;
  const body = { email, password };
  const data = await client.signin(params, body);

  return {
    id: data.data.id,
    email: data.data.email,
    name: data.data.name,
    birthday: new Date(data.data.birthday),
    introduction: data.data.introduction,
    authorization: data.authorization,
  };
}

export async function reSignin(authorization: string): Promise<TCredential> {
  const headers = { authorization };
  const data = await client.validateToken(headers);

  return {
    id: data.data.id,
    email: data.data.email,
    name: data.data.name,
    birthday: new Date(data.data.birthday),
    introduction: data.data.introduction,
    authorization: data.authorization,
  };
}

export async function getRecruitments(): Promise<TRecruitment[]> {
  const params = undefined;
  const body = undefined;
  const data = await client.recruitmentList(params, body);

  return data.map(
    ({
      id,
      imageUrl,
      title,
      targets,
      organizer: { name, profileImageUrl },
      createdAt,
      peopleLimit,
      participantsCount,
    }) => ({
      id,
      name,
      user_id: 0,
      imgUrl: imageUrl,
      title,
      targets,
      peopleLimit,
      participantsCount,
      createdAt,
      updatedAt: "",
    })
  );
}

export async function getRoomChat(roomId: number): Promise<TRoomMessage[]> {
  const params = { roomId };
  const body = undefined;
  const { users, messages } = await client.roomDetail(params, body);

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

export async function getQuestion(
  recruitmentId: number
): Promise<TQuestionMessage[]> {
  const params = { recruitmentId };
  const body = undefined;
  const { messages } = await client.questionDetail(params, body);

  return messages.map(({ body, created_at }) => {
    return {
      body,
      created_at,
    };
  });
}

export async function getRecruitmentDetail(id: number): Promise<TArticle> {
  const params = { recruitmentId: id };
  const body = undefined;
  const data = await client.recruitmentDetail(params, body);

  return {
    user: {
      id: data.organizer.id,
      name: data.organizer.name,
      profileImageUrl: data.organizer.imageUrl,
    },
    recruitment: {
      imageUrl: data.recruitment.imageUrl,
      title: data.recruitment.title,
      peopleLimit: data.recruitment.peopleLimit,
      participantsCount: data.participantIds.length,
      description: data.recruitment.description,
      targets: data.recruitment.targets,
      area: data.recruitment.area,
    },
    participantIds: data.participantIds,
  };
}

export async function createRecruitment(
  userId: number,
  title: string,
  description: string,
  area: string,
  peopleLimit: number,
  targets: string[],
  image: File
) {
  const params = undefined;
  const form = {
    userId,
    title,
    description,
    area,
    peopleLimit,
    targets,
    image,
  };
  await client.recruitmentCreate(params, form);
}

export async function applyRecruitment(recruitmentId: number, userId: number) {
  const params = { recruitmentId };
  const body = { userId };
  await client.recruitmentApply(params, body);
}

export async function searchRecruitment(keyword?: string, targets?: string[]): Promise<TRecruitment[]> {
  const params = undefined;
  const query = { keyword, targets };

  const data = await client.recruitmentSearch(params, query);
  return data.map(
    ({
      id,
      imageUrl,
      title,
      targets,
      organizer: { name, profileImageUrl },
      createdAt,
      peopleLimit,
      participantsCount,
    }) => ({
      id,
      name,
      user_id: 0,
      imgUrl: imageUrl,
      title,
      targets,
      peopleLimit,
      participantsCount,
      createdAt,
      updatedAt: "",
    })
  );
}

export async function getRecruitmentsList(condition: TCondition): Promise<TRecruitment[]> {
  if (condition.keyword === undefined && condition.targets === undefined) {
    return await getRecruitments();
  }

  return await searchRecruitment(condition.keyword, condition.targets);
}