import { selector } from 'recoil';
import credentialAtom from './credenialAtom';

const signedInSelector = selector({
    key: "SignedInSelector",
    get: ({ get }) => {
        const credential = get(credentialAtom);
        return !!credential;
    }
});

export default signedInSelector;