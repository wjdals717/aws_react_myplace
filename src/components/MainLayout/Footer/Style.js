import { css } from "@emotion/react";

export const SLayout = css`
    margin: 0;
    padding: 42px 0 36px;
    background: #f9f9f9;
    text-align: center;

    .before {
        content: "";
        display: inline-block;
        margin: 2px 9px 0;
        vertical-align: top;
        width: 1px;
        height: 13px;
        background: #e1e1e1;
    }
`;

export const SServiceContainer = css`
    display: flex;
    justify-content: center;
    
    button {
        font-size: 14px;
        font-weight: 500;
        vertical-align: top;
        line-height: 14px;
        color: #8f8f8f;
    }
`;

export const SContainer = css`
    display: flex;
    justify-content: center;
    margin-top: 12px;

    button {
        font-size: 12px;
        vertical-align: top;
        line-height: 12px;
        color: #8f8f8f;
    }

    .logo-container {
        margin-top: 10px;
    }
`;

