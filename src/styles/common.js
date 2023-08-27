import { css } from "@emotion/react";

export const GSCommon = css`
    *{
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;
    }

    div {
        display: block;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        appearance: none;
        background-color: transparent;
        cursor: pointer;
    }

    img, svg {
        display: inline-block;
        vertical-align: top;
    }

    span {
        font-size: 16px;
    }

`;