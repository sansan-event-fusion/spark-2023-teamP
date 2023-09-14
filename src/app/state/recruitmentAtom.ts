import { atom } from "recoil";
import { TArticle } from "../type";

const recruitmentAtom = atom<TArticle|null>({
    key: "RecruitmentAtom",
    default: null
});

export default recruitmentAtom;