import { TRecruitment } from "../type";
import { recruitmentList } from "./client";

export async function getRecruitments(): Promise<TRecruitment[]> {
    const params = undefined;
    const body = undefined;
    const data = await recruitmentList(params, body);

    return data.map(({
        id,
        image,
        title,
        organizer: {
            name,
            profileImage,
        },
        created_at,
        peopleLimit,
        participantsCount,
    }) => ({
        id,
        name,
        user_id: 0,
        imgUrl: "",
        title,
        peopleLimit,
        createdAt: created_at.toString(),
        updatedAt: ""
    }));
}