import { atom } from "recoil";
import { TConfig } from "../type";

export const defaultConfigValue: TConfig = {
    mocked: false,
    loginDisabled: false
};

const configAtom = atom<TConfig>({
    key: "ConfigAtom",
    default: defaultConfigValue
});

export default configAtom;