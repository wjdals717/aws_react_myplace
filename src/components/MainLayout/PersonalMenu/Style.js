import { css } from "@emotion/react";

export const SLayout = css`
    padding: 20px 0 11px;
    width: 100%;
    height: 151px;
    background-color: #06B495;
`;

export const SContainer = css`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 20px;
    max-width: 375px;
`;

export const SImgBox = css`
    position: relative;
    margin-right: 29px;
    border-radius: 50%;
    background-color: #ffffff;
    width: 64px;
    height: 64px;

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        /* -webkit-transform: translate(-50%,-50%); */
        transform: translate(-50%,-50%);
        border-radius: 50%;
        z-index: 10;
        width: 60px;
        height: 60px;
    }
`;

export const SLoginBox = css`
    font-size: 16px;
    span {
        margin-right: 5px;
        color: #ffffff;
    }
`;

export const SOptionBox = css`
    margin-top: 18px;

    div {
        display: flex;
        justify-content: space-between;

        span:first-child {
            width: 226px;
        }
        span:last-child {
            width: 102px;
        }
    }

    button {
        border-radius: 8px;
        width: 100%;
        height: 38px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0,107,88,.1);
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        background-color: #0CC5A4;
    }

    svg {
        margin-top: 3px;
        margin-right: 5px;
    }
`;