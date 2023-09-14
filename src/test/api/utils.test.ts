import { isEqual } from "../../app/api/utils";

describe("utils", () => {
    describe("isEqual", () => {
        it("same string", () => {
            const res = isEqual("test", "test");
            expect(res).toBeTruthy();
        });
        it("differenct string", () => {
            const res = isEqual("test", "wrong");
            expect(res).toBeFalsy();
        });
        it("same number", () => {
            const res = isEqual(1, 1);
            expect(res).toBeTruthy();
        });
        it("different number", () => {
            const res = isEqual(1, 2);
            expect(res).toBeFalsy();
        });
        it("same boolean", () => {
            const res = isEqual(true, true);
            expect(res).toBeTruthy();
        });
        it("different boolean", () => {
            const res = isEqual(true, false);
            expect(res).toBeFalsy();
        });
        it("different literal", () => {
            const res = isEqual(1, true);
            expect(res).toBeFalsy();
        });
        it("same array", () => {
            const res = isEqual(["test", 1, true], ["test", 1, true]);
            expect(res).toBeTruthy();
        });
        it("different array", () => {
            const res = isEqual(["test", 1, true], ["wrong", 1, true]);
            expect(res).toBeFalsy();
        });
        it("same nested array", () => {
            const res = isEqual([["test", 1], true], [["test", 1], true]);
            expect(res).toBeTruthy();
        });
        it("different nested array", () => {
            const res = isEqual([["test", 1], true], [["wrong", 1], true]);
            expect(res).toBeFalsy();
        });
        it("same object", () => {
            const res = isEqual({ text: "test", number: 1, flag: true }, { text: "test", number: 1, flag: true });
            expect(res).toBeTruthy();
        });
        it("different object", () => {
            const res = isEqual({ text: "test", number: 1, flag: true }, { text: "wrong", number: 1, flag: true });
            expect(res).toBeFalsy();
        });
        it("same complex object", () => {
            const res = isEqual({ message: "test",  value: { userId: 1 } }, { message: "test",  value: { userId: 1 } });
            expect(res).toBeTruthy();
        });
        it("different complex object", () => {
            const res = isEqual({ message: "test",  value: { userId: 1 } }, { message: "test",  value: { userId: 2 } });
            expect(res).toBeFalsy();
        });
    });
});
