import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { PiStarThin } from 'react-icons/pi';
import { SlArrowRight } from 'react-icons/sl';

function FeedFooter({ footer }) {
    return (
        <div css={S.SLocationContainer}>
            <div css={S.SLocationBox}>
                <button>
                    <span>{footer.storeName}</span>
                    <SlArrowRight />
                </button>
                <div>
                    <span>{footer.classtification}</span>
                    <span>{footer.storeLocation}</span>
                </div>
            </div>
            <div css={S.SSaveButton}>
                <button><PiStarThin /><span>저장</span></button>
            </div>
        </div>
    );
}

export default FeedFooter;