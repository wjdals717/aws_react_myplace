/** @jsxImportSource @emotion/react */
import * as S from "../../styles/PageStyle";
import React from 'react';

function TimeLine(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer} className="timeline-container">
                <b>🚩</b>
                <div>
                    <strong>영수증/카드내역 인증, 예약, 주문</strong>한
                    <br />
                    장소가 나의 기록이 됩니다.
                </div>
                <div>방문했던 곳을 한 눈에 모아보세요.</div>
                <div>
                    <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png" alt="" />
                </div>
                <div>
                    <button>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default TimeLine;