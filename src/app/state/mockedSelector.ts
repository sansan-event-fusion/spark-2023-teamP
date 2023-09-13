import { DefaultValue, selector } from 'recoil';
import configAtom, { defaultConfigValue } from './configAtom';

const currentUserSelector = selector({
    key: "MockedSelector",
    get: ({ get }) => {
        const { mocked } = get(configAtom);
        return mocked;
    },
    set: ({ get, set }, mocked) => {
        const config = get(configAtom);
        if (mocked instanceof DefaultValue) {
            mocked = defaultConfigValue.mocked;
        }
        set(configAtom, { ...config, mocked });
    }
});

export default currentUserSelector;