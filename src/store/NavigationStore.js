import { atom } from "recoil";

export const isNavigationState = atom({
    key: "isNavigationState",
    default: false
});

export const categorySelectedState = atom({
    key: "categorySelectedState",
    default: "all"
});