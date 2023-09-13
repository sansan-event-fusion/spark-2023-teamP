import { selector } from 'recoil';
import credentialAtom from './credenial';
import { TUser } from '../type';

const currentUserSelector = selector<TUser|null>({
    key: "CurrentUserSelector",
    get: ({ get }) => {
        return get(credentialAtom);
    }
});

export default currentUserSelector;