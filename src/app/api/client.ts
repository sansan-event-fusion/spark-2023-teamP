import * as type from "./type";
import { request, requestJson } from "./request";

export type ApiFn<P, B, R> = (params: P, body: B) => Promise<R>;

type TokenResponse = {
  accessToken: string;
  authorization: string;
};

export async function signin(
  params: type.SignInParams = undefined,
  body: type.SignInBody
) {
  const res = await request("/auth/sign_in", "POST", { body });
  const data: type.SignInResponse = await res.json();

  const accessToken = res.headers.get("access-token");
  const authorization = res.headers.get("authorization");

  if (!accessToken || !authorization) {
    throw new Error("Credenial information is not found in headers");
  }

  const result: type.SignInResponse & TokenResponse = {
    ...data,
    accessToken,
    authorization,
  };
  return result;
}

export async function validateToken(headers: type.ValidateTokenHeaders) {
  const res = await request("/auth/validate_token", "GET", { headers });
  const data: type.ValidateTokenResponse = await res.json();

  const accessToken = res.headers.get("access-token");
  const authorization = res.headers.get("authorization");

  if (!accessToken || !authorization) {
    throw new Error("Credenial information is not found in headers");
  }

  const result: type.ValidateTokenResponse & TokenResponse = {
    ...data,
    accessToken,
    authorization,
  };
  return result;
}

export async function userDetail(
  params: type.UserDetailParams,
  body: type.UserDetailBody = undefined
) {
  return await requestJson<type.UserDetailResponse>("/users/:userId", "GET", {
    params,
  });
}

export async function userUpdate(
  params: type.UserUpdateParams,
  body: type.UserUpdateBody
) {
  throw new Error("Api not implemented");
  await request("/users/:userId", "PATCH", { params, body });
}

export async function recruitmentList(
  params: type.RecruitmentListParams = undefined,
  body: type.RecruitmentListBody = undefined
) {
  return await requestJson<type.RecruitmentListResponse>(
    "/recruitments",
    "GET"
  );
}

export async function recruitmentCreate(
  params: type.RecruitmentCreateParams = undefined,
  form: type.RecruitmentCreateForm
) {
  await request("/recruitments", "POST", { form });
}

export async function recruitmentDetail(
  params: type.RecruitmentDetailParams,
  body: type.RecruitmentDetailBody = undefined
) {
  return await requestJson<type.RecruitmentDetailResponse>(
    "/recruitments/:recruitmentId",
    "GET",
    { params }
  );
}

export async function recruitmentUpdate(
  params: type.RecruitmentUpdateParams,
  body: type.RecruitmentUpdateBody
) {
  throw new Error("Api not implemented");
  await request("/recruitments/:recruitmentId", "PATCH", { params, body });
}

export async function recruitmentApply(
  params: type.RecruitmentApplyParams,
  body: type.RecruitmentApplyBody
) {
  await request("/recruitments/:recruitmentId/apply", "POST", { params, body });
}

export async function recruitmentSearch(
  params: type.RecruitmentSearchParams = undefined,
  query: type.RecruitmentSearchQuery
) {
  return await requestJson<type.RecruitmentSearchResponse>(
    "/recruitments/search",
    "GET",
    { query }
  );
}

export async function roomDetail(
  params: type.RoomDetailParams,
  body: type.RoomDetailBody = undefined
) {
  throw new Error("Api not implemented");
  return await requestJson<type.RoomDetailResponse>("/rooms/:roomId", "GET", {
    params,
  });
}

export async function questionDetail(
  params: type.QuestionDetailParams,
  body: type.RoomDetailBody = undefined
) {
  throw new Error("Api not implemented");
  return await requestJson<type.QuestionDetailResponse>(
    "/recruitments/:recruitmentId/question",
    "GET",
    {
      params,
    }
  );
}
