import { css } from "@emotion/react";

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