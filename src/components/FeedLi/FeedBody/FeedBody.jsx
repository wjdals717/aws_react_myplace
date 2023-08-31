import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { BsEmojiSmile } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';

function FeedBody({ body }) {
    return (
        <>
            <div css={S.SImgLayout}>
                <button css={S.SImgContainer}>
                    <div css={S.SImgBox(!!body.img3)}>
                        <div css={S.SFirstImgBox}>
                            <div css={S.SImg(body.img1)}></div>
                        </div>
                        {!!body.img2 && (
                        <div css={S.SSecondImgBox}>
                            <div css={S.SImg(body.img2)}></div>
                            {!!body.img3 && (
                            <div css={S.SImg(body.img3)}></div>)}
                        </div>)}
                    </div>
                    <div css={S.SImgLocation}>
                        <div>
                            <FaLocationDot />
                            <span>{body.imgLocation}</span>
                        </div>
                    </div>
                </button>
            </div>
            <div css={S.SContentContainer}>
                <a href="">{body.content}</a>
            </div>
            <div css={S.SHashTagContainer}>
                <span>{body.hashTag}</span>
                <span>+1</span>
            </div>
            <div css={S.SEmotionContainer}>
                <div><button> <BsEmojiSmile /> 반응 남기기</button></div>
                <div><span>{body.visitedDate}</span></div>
            </div>
        </>
    );
}

export default FeedBody;