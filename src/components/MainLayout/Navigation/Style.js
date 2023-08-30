import { css } from "@emotion/react";

export const SLayout = css`
    position: sticky;           //스크롤시 상단에 위치 고정
    top: 0;
    right: 0;
    left: 0;
    padding: 0 20px;
    width: 100%;
    height: 51px;
    background-color: #06B495;
    z-index: 5000;
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