/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import React from 'react';
import { SiNaver } from "react-icons/si";
import { BsTicket } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

function Header(props) {
    return (
        <div css={S.SLayout}>
            <h1 css={S.STitleContainer}>
                <button css={S.SLogo}><SiNaver size={10} color="#06B495"/></button>
                <button css={S.STitle}>MY플레이스</button>
            </h1>
            <button css={S.SButton}>
                <BsTicket size={40} color="#ffffff"/>
                <span>쿠폰</span>
            </button>
            <button><HiOutlineMenu size={25} color="#ffffff"/></button>
        </div>
    );
}

export default Header;