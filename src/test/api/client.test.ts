import * as client from "../../app/api/client";
import { users, recruitments, findById, findBy, recruitment_targets } from "./seeds";

describe("client", () => {
    describe("users", () => {
        it("userDetail", async () => {
            const params = { userId: 1 };
            const body = undefined;
            const data = await client.userDetail(params, body);

            const user = findById(users, 1);
            const expectData = {
                id: user?.id,
                email: user?.email,
                name: user?.name,
                birthday: user?.birthday,
                introduction: user?.introduction,
            };
            expect(data).toEqual(expectData);
        });
    });
    describe("recruitments", () => {
        it("recruitmentList", async () => {
            const params = undefined;
            const body = undefined;
            const data = await client.recruitmentList(params, body);

            const expectData = recruitments.map(recruitment => {
                const user = findById(users, recruitment.userId)!;

                return {
                    id: recruitment.id,
                    image: expect.anything(),
                    title: recruitment.title,
                    createdAt: expect.any(String),
                    organizer: {
                        name: user.name,
                        profileImage: expect.anything() 
                    },
                    peopleLimit: parseInt(recruitment.peopleLimit),
                    participantsCount: parseInt(recruitment.participantsCount)
                };
            });
            expect(data).toEqual(expectData);
        });
        it("recruitmentDetail", async () => {
            const params = { recruitmentId: 1 };
            const body = undefined;
            const data = await client.recruitmentDetail(params, body);

            const recruitment = findById(recruitments, 1)!;
            const user = findById(users, recruitment.userId)!;
            const targets = findBy(recruitment_targets, "recruitmentId", recruitment.id);
            
            const expectData = {
                organizer: {
                    id: user.id,
                    name: user.name,
                    image: expect.anything(),
                },
                recruitment: {
                    title: recruitment.title,
                    description: recruitment.description,
                    area: recruitment.area,
                    peopleLimit: parseInt(recruitment.peopleLimit),
                    participantsCount: parseInt(recruitment.participantsCount),
                    targets: targets.map(target => target.title),
                }
            };
            expect(data).toEqual(expectData);
        });
        it.skip("recruitmentCreate", async () => {
            const params = undefined;
            const body = {
                userId: 1,
                title: "test",
                description: "test",
                image: "test",
                area: "test",
                peopleLimit: 4,
                targets: ["enjoy", "beginner"],
            };
            await client.recruitmentCreate(params, body);
        });
        it("recruitmentApply", async () => {
            const params = { recruitmentId: 1 };
            const body = { user_id: 1 };
            await client.recruitmentApply(params, body);
        });
        it.skip("recruitmentSearch", async () => {
            const params = undefined;
            const body = { keyword: "test" };
            const data = await client.recruitmentSearch(params, body);
            const expectData = undefined;
            expect(data).toEqual(expectData);
        });
    });
});