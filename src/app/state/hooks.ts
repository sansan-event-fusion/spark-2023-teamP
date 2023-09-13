"use client";

import { useRecoilValue } from "recoil";
import * as state from "./";

export function useMocked() {
    return useRecoilValue(state.mockedSelector);
}

export function useLoginDisabled() {
    return useRecoilValue(state.loginDisabledSelector);
}

export function useSignedIn() {
    return useRecoilValue(state.signedInSelector);
}

export function useCurrentUser() {
    return useRecoilValue(state.currentUserSelector);
}