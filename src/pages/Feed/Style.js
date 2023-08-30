import { css } from "@emotion/react";

export const SLayout = css`
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    padding: 0 20px;
`;

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
        ${translate !== 0 && "opacity: 1;"}
        transition: opacity .2s;
    }

    &:hover .move-category-right{
        ${translate !== -1203 && "opacity: 1;"}
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

    span:first-child {
        padding-left: 20px;
    }

    span:last-child {
        padding-right: 20px;
    }

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

export const SListTransform = css`
    
`;

export const SUlLayout = css`
    position: relative;
    overflow-anchor: none;
`;

export const SLiLayout = css`
    margin: 0 auto;
    padding: 16px 20px 28px;
    align-items: center;
    max-width: 720px;
    width: 100%;
`;

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

export const SImgContainer = css`
    position: relative;
    border-radius: 8px;
    margin-top: 2px;
    width: 680px;
    height: 360px;
    overflow: hidden;
`;

export const SImgBox = css`
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    * div{
        position: relative;
        flex: 1 1;
        border-radius: 8px 0 0 8px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
    }

    *:first-child {
        background-image: url("https://i.pinimg.com/564x/b4/b9/96/b4b99672c8260cbf16f77b375a2f3a58.jpg");
        width: 59%;
        /* background-color: yellow; */
    }
    
    /* *:nth-child(2) {
        margin-left: 2px;
        border-radius: 0 0 ;
        background-image: url("https://i.pinimg.com/564x/f9/63/6c/f9636cad0daca020e2ea3018c2b0d7a2.jpg");
    }

    *:nth-child(3) {
        border-radius: 0 0 ;
        background-image: url("https://i.pinimg.com/564x/f7/26/4f/f7264fb6251032e18b23809f6744e813.jpg");
        background-color: green;
    } */

    /* div:first-child:nth-last-child(1) { //요소 개수가 1개일 경우
        width: 100%;
    } */

    /* div:first-child:nth-last-child(2),
    div:first-child:nth-last-child(2) ~ div {  //요소 개수가 2개일 경우
        width: 50%;
    } */

    /* div:first-child:nth-last-child(3),
    div:first-child:nth-last-child(3) ~ div  {  //요소 개수가 3개일 경우
        //안 합니다...
        *:first-child {
            width: 59%;
        }

        div:nth-child(2),
        div:nth-last-child(3) {
        }

    } */
`;

export const SSecondImgBox = css`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1 1;
    margin-left: 2px;
    border-radius: 8px 0 0 8px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;

    div:nth-child(1) {
        border-radius: 0 0 ;
        background-image: url("https://i.pinimg.com/564x/f9/63/6c/f9636cad0daca020e2ea3018c2b0d7a2.jpg");
        /* background-color: red; */
    }

    div:nth-child(2) {
        border-radius: 0 0 ;
        margin-top: 2px;
        background-image: url("https://i.pinimg.com/564x/77/31/21/77312174b8b31fed472e97332b39640d.jpg");
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
    }
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

export const SLocationContainer = css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    border: 1px solid #ecf0f2;
    border-radius: 8px;
    padding: 13px 16px 12px 15px;
    overflow: hidden;
`;

export const SLocationBox = css`
    overflow: hidden;
    flex: 1 1;

    button {
        padding: 0;
    }
    
    button > span {
        font-size: 17px;
        font-weight: 700;
    }

    svg {
        fill: #242424;
        flex: none;
        width: 10px;
        height: 15px;
        margin: 4px 0 0 5px;
    }

    div {
        display: block;
        overflow: hidden;
        margin-top: 4px;
        font-size: 13px;
        color: #8f8f8f;
        line-height: 16px;
    }
`;

export const SSaveButton = css`
    margin: 2px 0 0 28px;
    
    button {
        display: flex;
        flex-direction: column;
        padding: 0;
        width: 26px;
    }

    svg {
        fill: #b8b8b8;
        width: 18px;
        height: 18px;
    }
    
    span {
        display: block;
        margin-top: 6px;
        color: #8f8f8f;
        font-size: 11px;
        font-weight: 500;
        line-height: 13px;
        white-space: nowrap;
    }
`;




















