import { atom } from "recoil";
import { TCredential } from "../type";

const credentialAtom = atom<TCredential|null>({
    key: "CredetialAtom",
    default: null 
});

export default credentialAtom;