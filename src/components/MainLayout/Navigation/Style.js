import { css } from "@emotion/react";

export const SLayout = css`
    padding: 0 20px;
    width: 100%;
    height: 51px;
    background-color: #06B495;
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 375px;
    height: 100%;
`;

export const SPath =(isSelected) => css`
    display: block;
    position: relative;
    padding: 14px 5px;
    font-size: 17px;
    font-weight: 800;
    color: rgba(255,255,255,.7);

    ${isSelected && "color: #ffffff; border-bottom: 4px solid #ffffff;" }
    /* ${isSelected && "color: #ffffff;" } */

    /*div {
        display: none;
        
        ${isSelected &&
        "display: block; content: ''; border-radius: 2px; background-color: #ffffff;"}
    }*/
`;