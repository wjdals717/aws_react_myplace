import { css } from "@emotion/react";

export const SLayout = css`
    text-align: center;
    line-height: 24px;

    strong {
        font-weight: bold;
    }

    a {
        display: inline-block;
        margin-top: 15px;
        border-radius: 22px;
        padding: 10px 25px;
        background-color: #03c75a;
        color: #fff;
        text-decoration: none;
        font-size: 16px;
    }
`;

export const SLoginContainer = css`
    padding: 44px 0 50px;

    div {
        font-size: 20px;
        line-height: 1.4;
    }

    svg {
        width: 12px;
        height: 12px;
        margin-top: 5px;
        margin-right: 7px;
        fill: #fff;
    }
`;

export const SNoLoginContainer = css`
    margin: 0 20px;
    padding: 44px 0 50px;
    border-top: 1px solid #EBEDEF;

    div {
        font-size: 20px;
        line-height: 1.4;
        color: var(--booking-color-text6);
    }

    div:not(:first-child){
        margin-top: 16px;
    }

    input {
        width: 239px;
        height: 41px;
        padding-left: 14px;
        border: solid 1px #dbdbdb;
        border-radius: 10px;
    }

    a{
        margin-top: 20px;
        padding: 9px 24px;
        border: solid 1px rgba(0,0,0,.05);
        background-color: #383838;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.04);
    }
`;