/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "../../styles/PageStyle";
import React from 'react';

function Review(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer} className="review-container">
                <b>🚩</b>
                <div>
                    정성스레 작성한<strong> 리뷰</strong>
                    <br />
                    내 리뷰를 모아 만든 <strong> 테마리스트</strong>
                </div>
                <div>나의 발자취를 소중한 기록으로 남겨보세요.</div>
                <div>
                    <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_review_20221202.87ca2c0d90f42473c28ef6cff083836e.png" alt="" />
                </div>
                <div>
                    <button>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default Review;