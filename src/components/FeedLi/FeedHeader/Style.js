import { css } from "@emotion/react";

export const SLiContainer = css`
    display: flex;
    position: relative;
    flex: 1 1;
    align-items: center;
    height: 65px;
`;

export const SUSerBox = css`
    display: flex;
    -webkit-flex: 1 1;
    flex: 1 1;
    margin: -10px;
    padding: 10px;
    justify-content: left;
    align-items: center;
    text-align: left;
    height: 65px;
    overflow: hidden;

    /* *:last-child {
        display: flex;
        display: block;
    } */
`;

export const SProfileBox = css`
    display: inline-block;
    vertical-align: top;
    position: relative;
    border-radius: 50%;
    flex: none;
    float: none;
    margin-right: 8px;
    width: 42px;
    height: 42px;
    overflow: hidden;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 50%;
        background-color: #fff;
        background-position: 50% 50%;
        background-size: cover;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        z-index: 10;
    }
`;

export const SUserInfoBox = css`
    overflow: hidden;
    margin-top: 3px;
    font-size: 16px;
    font-weight: 700;

    div {
        margin-top: 2px;
        font-size: 14px;
        font-weight: normal;
        line-height: 1.5rem;
        color: #8f8f8f;
        letter-spacing: -.2px;
    }
`;

export const SFollowButton = css`
    width: 70px;
    border-radius: 4px;
    background: #EFF6FE;
    font-size: 14px;
    font-weight: 600;
    color: #287CFF;
    line-height: 28px;
    text-align: center;
`;

export const SReviewerMenuButton = css`
    position: relative;
    margin: 0 -12px 0 4px;
    width: 26px;
    height: 30px;
    vertical-align: top;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        fill: #b8b8b8;
        width: 18px;
        height: 18px;
    }
`;

export const SReviewerMenu = (isSelected) => css`
    ${!isSelected && "display: none;"}
    position: absolute;
    top: 52px;
    right: 0;
    border: 1px solid #dee0e2;
    border-radius: 18px;
    width: 184px;
    background: #fff;
    z-index: 2010;

    button {
        display: block;
        position: relative;
        padding-left: 17px;
        width: 100%;
        height: 56px;
        font-size: 16px;
        text-align: left;
        color: #333;
    }

    svg {
        position: absolute;
        top: 0;
        right: 15px;
        bottom: 0;
        width: 15px;
        height: 15px;
        margin: auto;
    }
`;
