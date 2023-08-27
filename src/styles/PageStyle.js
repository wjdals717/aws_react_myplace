import { css } from "@emotion/react";

export const SLayout = css`
    padding: 25px 20px;

    .timeline-container {
        background-image: linear-gradient(142deg,#55abab,#6fc2ac);
    }

    .review-container{
        background-image: linear-gradient(127deg,#717cea 6%,#4b81da 87%);
        img {
            width: 251px;
            aspect-ratio: auto 251 / 163;
            height: 163px;
        }
    }

    .save-container{
        background-image: linear-gradient(127deg,#eb8787 7%,#ef9177 87%);
        img {
            width: 225px;
            aspect-ratio: auto 225 / 180;
            height: 180px;
        }
    }


`;

export const SContainer = css`
    box-sizing: border-box;
    max-width: 720px;
    margin: 0 auto;
    border-radius: 15px;
    padding: 34px 30px 40px;
    text-align: center;
    width: 100%;
    min-height: 430px;
    line-height: 24px;
    color: #fff;
    //background-image: linear-gradient(142deg,#55abab,#6fc2ac);

    b{
        display: block;
        width: 19px;
        height: 20px;
        margin: 0 auto 15px;
        font-size: 20px;
    }

    strong{
        font-weight: 900;
    }

    div:nth-child(2){
        font-size: 20px;
    }

    div:nth-child(3){
        margin-top: 5px;
        font-size: 15px;
        color: #bbedee;
    }

    div:nth-child(4){
        margin-top: 27px;
    }

    img{
        width: 235px;
        aspect-ratio: auto 235 / 155;
        height: 155px;
    }

    div:nth-child(5){
        display: flex;
        justify-content: center;
        margin-top: 22px;
    }

    button {
        padding: 9px 0;
        border: 1px solid rgba(255,255,255,.3);
        border-radius: 22px;
        width: 143px;
        font-size: 16px;
        color: #fff;
        /* line-height: 2.6rem; */
    }
`;
