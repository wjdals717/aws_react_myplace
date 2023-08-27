import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #06AD8F;
    padding: 8px 18px 8px 15px;
    background-color: #06B495;
    width: 100%;
    height: 53px;
`;

export const STitleContainer = css`
    flex-grow: 1;
    font-size: 32px;
    font-weight: 700;

    button {
        display: inline-block;
        vertical-align: top;
    }
`;

export const SLogo = css`
    padding: 8px 5px 7px 5px;
    background-color: #ffffff;
    background-clip: content-box;
    width: 31px;
    height: 36px;
    line-height: 4px;
`;

export const STitle = css`
    margin-left: 3px;
    padding: 11px 2px 5px;
    font-size: 16px;
    line-height: 12px;
    height: 36px;
    color: white;
`;

export const SButton = css`
    position: relative;
    margin: 0 5px;
    padding: 0;
    width: 34px;
    height: 36px;

    /* svg {
        width: 60px;
        height: 40px;
    } */

    span {
        position: absolute;
        top: 1px;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        line-height: 2.3rem;
    }
`;
