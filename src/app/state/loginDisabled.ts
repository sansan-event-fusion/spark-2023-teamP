import { DefaultValue, selector } from 'recoil';
import configAtom, { defaultConfigValue } from './config';

const loginDisabledSelector = selector({
    key: "LoginDisabledSelector",
    get: ({ get }) => {
        const { loginDisabled } = get(configAtom);
        return loginDisabled;
    },
    set: ({ get, set }, loginDisabled) => {
        const config = get(configAtom);
        if (loginDisabled instanceof DefaultValue) {
            loginDisabled = defaultConfigValue.loginDisabled;
        }
        set(configAtom, { ...config, loginDisabled });
    }
});

export default loginDisabledSelector;