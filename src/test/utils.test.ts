import { matchPath } from "../app/utils";

describe("utils", () => {
    describe("matchPath", () => {
        it("simple matched path", () => {
            const res = matchPath("/test", "/test");
            expect(res).toBeTruthy();
        });
        it("simple not matched path", () => {
            const res = matchPath("/wrong", "/test");
            expect(res).toBeFalsy();
        });
        it("root path", () => {
            const res = matchPath("/", "/");
            expect(res).toBeTruthy();
        });
        it("shorter path", () => {
            const res = matchPath("/test", "/test/detail");
            expect(res).toBeFalsy();
        });
        it("longer path", () => {
            const res = matchPath("/test/detail", "/test");
            expect(res).toBeFalsy();
        });
        it("with params at the end", () => {
            const res = matchPath("/test/1", "/test/:userId");
            expect(res).toBeTruthy();
        });
        it("with params inside", () => {
            const res = matchPath("/test/1/page", "/test/:userId/page");
            expect(res).toBeTruthy();
        });
        it("not matched with params", () => {
            const res = matchPath("/wrong/1/page", "/test/:userId/page");
            expect(res).toBeFalsy();
        });
    })
});