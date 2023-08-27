/** @jsxImportSource @emotion/react */
import * as S from "../../styles/PageStyle";
import React from 'react';

function Save(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}  className="save-container">
                <b>🚩</b>
                <div>
                    가고싶은 맛집, 카페 저장하고
                    <br />
                    나의<strong> 리스트</strong>를 만들어 보세요
                </div>
                <div>여행 코스도 계획하기도 굳~</div>
                <div>
                    <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_bookmark.4939778b9d2b5079407ea43536a05566.png" alt="" />
                </div>
                <div>
                    <button>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default Save;