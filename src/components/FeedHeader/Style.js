import { css } from "@emotion/react";

export const SContainer = css`
   position: relative;
   margin: 0 -20px;
`;

export const SSettingBox = css`
    padding: 6px 98px 6px 0;
`;

export const SFollowingList = (isSelected) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    z-index: 1;

    div {
        display: inline-block;
        vertical-align: top;
        padding: 6px 0 6px 8px;
    }

    div:first-child {
        padding-left: 20px;
    }

    div:last-child {
        padding-right: 20px;
    }

    button {
        position: relative;
        border-radius: 5px;
        padding: 0 13px;
        font-size: 15px;
        letter-spacing: -.5px;
        line-height: 40px;
        background-color: #fff;
        color: black;
        box-shadow: 0 2px 6px rgba(0,0,0,.06)
        /* ${(isSelected =="전체") && "background-image: linear-gradient(90deg,#2d8dee,#2da1ee);"} */
    }

    .whole {
        ${(isSelected =="whole") && 
        "background-image: linear-gradient(90deg,#2d8dee,#2da1ee); color: #fff; font-weight: 700; box-shadow: 0 2px 6px 0 rgba(37,146,255,.35);"}
    }

    .following {
        ${(isSelected =="following") && 
        "background-image: linear-gradient(90deg,#2d8dee,#2da1ee); color: #fff; font-weight: 700; box-shadow: 0 2px 6px 0 rgba(37,146,255,.35);"}
    }

`;

export const SLocation = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    padding: 12px 16px 12px 20px;
    color: #8f8f8f;

    .before {
        content: "";
        position: absolute;
        top: 21px;
        left: 8px;
        border-radius: 2px;
        width: 2px;
        height: 24px;
        background: #e2e5e8;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        border-radius: 5px;
        padding: 0;
        width: 62px;
        font-size: 15px;
        font-weight: 600;
        line-height: 20px;
        color: rgba(var(--place-color-feed-gray),1);
        background: transparent;
    }
    
    svg {
        fill: #8f8f8f;
        width: 16px;
        height: 16px;
        margin-right: 3px;
        /* margin: 4px 4px 0 0; */
    }
`;