import * as type from "./type";
import { request, requestJson } from "./request";

export async function userDetail(params: type.UserDetailParams, body: type.UserDetailBody = undefined) {
    return await requestJson<type.UserDetailResponse>("/users/:userId", "GET", params, body);
}

export async function userUpdate(params: type.UserUpdateParams, body: type.UserUpdateBody) {
    await request("/users/:userId", "PATCH", params, body);
}

export async function recruitmentList(params: type.RecruitmentListParams = undefined, body: type.RecruitmentListBody = undefined) {
    return await requestJson<type.RecruitmentListResponse>("/recruitments", "GET", params, body);
}

export async function recruitmentCreate(params: type.RecruitmentCreateParams = undefined, body: type.RecruitmentCreateBody) {
    await request("/recruitments", "POST", params, body);
}

export async function recruitmentDetail(params: type.RecruitmentDetailParams, body: type.RecruitmentDetailBody = undefined) {
    return await requestJson<type.RecruitmentDetailResponse>("/recruitments/:recruitmentId", "GET", params, body);
}

export async function recruitmentUpdate(params: type.RecruitmentUpdateParams, body: type.RecruitmentUpdateBody) {
    await request("/recruitments/:recruitmentId", "PATCH", params, body);
}

export async function recruitmentApply(params: type.RecruitmentApplyParams, body: type.RecruitmentApplyBody) {
    await request("/recruitments/:recruitmentId/apply", "POST", params, body);
}

export async function recruitmentSearch(params: type.RecruitmentSearchParams = undefined, body: type.RecruitmentSearchBody) {
    await requestJson<type.RecruitmentSearchResponse>("/recruitments/search", "GET", params, body);
}

export async function roomDetail(params: type.RoomDetailParams, body: type.RoomDetailBody = undefined) {
    return await requestJson<type.RoomDetailResponse>("/rooms/:roomId", "GET", params, body);
}