import { css } from "@emotion/react";

export const SCategoryContainer = css`
    margin: 0;
    padding: 10px 0 0;
    background: #fff;
    width: 100%;
`;

export const SListBox = (translate) => css`
    position: relative;
    display: flex;
    overflow-x: hidden;
    white-space: nowrap;
    user-select: none;      //브라우저에서 드래그나 더블 클릭을 사용한 텍스트 선택 등을 막음
    /* -webkit-user-drag: auto; */
    touch-action: pan-y;

    .move-category-left {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transition: opacity .2s;
        opacity: 0;
        width: 46px;
        z-index: 100;
        background: linear-gradient(270deg,hsla(0,0%,100%,0),#fff 28px);
    }

    .move-category-right {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        transition: opacity .2s;
        opacity: 0;
        width: 46px;
        z-index: 100;
        background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 28px);
    }

    &:hover .move-category-left{
        ${translate !== 0 && "opacity: 1; display: block;"}
        transition: opacity .2s;
    }

    &:hover .move-category-right{
        ${translate !== -1203 && "opacity: 1; display: block;"}
        transition: opacity .2s;
    }
`;

export const SList = (translate) => css`
    position: relative;
    transition: transform 0.3s ease; /* 이동 애니메이션을 위한 트랜지션 설정 */
    transform: translate(${translate + "px"});
    display: flex;
    flex-direction: row;
    touch-action: pan-y;
    width: 100%;
    height: 100%;
    z-index: 1;

    span {
        display: inline-block;
        padding-left: 6px;
        flex-shrink: 0;
        vertical-align: top;
    }

    /* span:first-child {
        padding-left: 20px;
    } */

    /* span:last-child {
        padding-right: 20px;
    } */

    .custom-button {
        font-weight: 600;
        border-color: #424242;
        background-color: #424242;
        color: #fff;
    }
`;

export const SListButton = css`
    transform: translate(0px);
    border: 1px solid #eaeef2;
    border-radius: 19px;
    padding: 0 13px;
    font-size: 15px;
    font-weight: 500;
    line-height: 34px;
    color: #8f8f8f;
`;