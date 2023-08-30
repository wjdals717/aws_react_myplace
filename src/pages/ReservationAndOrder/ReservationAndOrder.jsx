/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from "./Style";
import { SiNaver } from "react-icons/si";

function ReservationAndOrder(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SLoginContainer}>
                <div>
                    <strong>로그인</strong>하고 예약,
                    <br />
                    주문 내역을 확인해보세요.
                </div>
                <a href="https://nid.naver.com/nidlogin.login?svctype=262144&locale=ko_KR&url=https%3A%2F%2Fm.booking.naver.com%2Fmy%2Fbookings%3Ffrom%3Dmyp&area=bbt">
                    <SiNaver/>
                    네이버 로그인
                </a>
            </div>
            <div css={S.SNoLoginContainer}>
                <div><strong>비회원 </strong>예약확인</div>
                <div>
                    <input type="text" placeholder="예약번호 입력"/>
                </div>
                <div>
                    <input type="text" placeholder="예약자명 입력"/>
                </div>
                <a href="">내 예약 확인</a>
            </div>
        </div>
    );
}

export default ReservationAndOrder;