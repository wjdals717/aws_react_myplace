/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import React from 'react';
import { BsChevronRight } from "react-icons/bs";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { LiaCheckCircle } from "react-icons/lia";

function PersonalMenu(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <button>
                    <div css={S.SImgBox}>
                        <img src="https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png" alt="" />
                    </div>
                    <div css={S.SLoginBox}>
                        <span>로그인하기</span>
                        <BsChevronRight size={10} color="#ffffff"/>
                    </div>
                </button>
                <div css={S.SOptionBox}>
                    <div>
                        <span><button><PiPencilSimpleLineFill size={17}/>리뷰 쓰기</button></span>
                        <span><button><LiaCheckCircle />미션</button></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalMenu;