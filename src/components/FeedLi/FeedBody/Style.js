import { css } from "@emotion/react";

export const SImgLayout = css`
    position: relative;
    border-radius: 8px;
    margin-top: 2px;
    width: 680px;
    height: 360px;
    overflow: hidden;
`;

export const SImgContainer = css`
    padding: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const SImgBox = (isImg3) => css`
    display: flex;
    width: 100%;
    height: 100%;

    & > div:nth-of-type(2) {
        margin-left: 2px;
    }

    & > div:first-of-type:nth-last-of-type(1) {
        flex: none;
        width: 100%;
    }
    & > div:first-of-type:nth-last-of-type(1) > div {
        border-radius: 8px;
    }

    & > div:first-of-type:nth-last-of-type(2) {
        flex: none;
        ${isImg3 ? "width: 59%;" : "width: 50%;"}
    }
`;

export const SFirstImgBox = css`
    div {
        border-radius: 8px 0 0 8px;
    }
`;

export const SSecondImgBox = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & > div:first-of-type:nth-last-of-type(1) {
        height: 100%;
    }

    & > div:first-of-type {
        border-top-right-radius: 8px;
    }

    & > div:last-of-type:first-of-type {
        border-bottom-right-radius: 8px;
    }

    & > div:first-of-type:nth-last-of-type(2) {
        height: 50%;
    }

    & > div:last-of-type:nth-of-type(2) {
        margin-top: 2px;
        border-bottom-right-radius: 8px;
    }
    /* display: flex;
    flex-direction: column;
    position: relative;
    flex: 1 1;
    margin-left: 2px;
    border-radius: 8px 0 0 8px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    & > div:nth-child(1) {
        border-radius: 0 0;
    }

    div:nth-child(2) {
        border-radius: 0 0 ;
        margin-top: 2px;
        background-color: green;
    }

    div:first-child:nth-last-child(1) { //요소 개수가 1개일 경우
        width: 100%;
        height: 100%;
    }

    div:first-child:nth-last-child(2),
    div:first-child:nth-last-child(2) ~ div {  //요소 개수가 2개일 경우
        width: 100%;
        height: 50%;
    } */
`;

export const SImg = (img) => css`
    position: relative;
    display: flex;
    flex: 1 1;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-image: url(${img});
`;


export const SImgLocation = css`
    position: absolute;
    right: 76px;
    bottom: 5px;
    left: 5px;
    text-align: left;

    div {
        display: inline-flex;
        vertical-align: top;
        border-radius: 4px;
        padding: 0 4px;
        max-width: 100%;
        color: #fff;
        background: rgba(0,0,0,.6);
    }

    svg {
        margin: 5px 2px 0 0;
        fill: #fff;
        width: 12px;
        height: 12px;
    }

    span {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        line-height: 24px;
    }
`;

export const SContentContainer = css`
    margin-top: 10px;
    
    a {
        font-size: 16px;
        line-height: 22px;
        color: #666;
    }
`;

export const SHashTagContainer = css`
    margin: 6px 0 -7px;

    span {
        display: inline-block;
        margin: 0 4px 7px 0;
        border-radius: 4px;
        padding: 4px 7px;
        vertical-align: top;
        background: #f5f7f8;
        font-size: 13px;
        color: #666;
        line-height: 20px;
    }
`;

export const SEmotionContainer = css`
    display: flex;
    position: relative;
    margin-top: 17px;

    div:first-child {
        display: flex;
        overflow: hidden;
        flex: 1 1;
        margin-right: 30px;
        white-space: nowrap;
    }

    div > button {
        margin-left: 2px;
        font-size: 16px;
        font-weight: 400;
        color: #424242;
        line-height: 24px;
        text-align: left;
    }

    svg {
        display: inline-block;
        margin-right: 6px;
        margin-left: -1px;
        vertical-align: top;
        width: 20px;
        height: 20px;
    }

    div > span {
        font-size: 14px;
        color: #9a9a9a;
        line-height: 24px;
    }
`;