import { atom } from "recoil";
import { TConfig } from "../type";

const configAtom = atom<TConfig>({
    key: "ConfigAtom",
    default: {
        mocked: false,
        loginDisabled: false
    }
});

export default configAtom;