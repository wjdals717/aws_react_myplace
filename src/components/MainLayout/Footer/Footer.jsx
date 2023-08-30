/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import React from 'react';

function Footer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SServiceContainer}>
                <span><button>로그인</button></span>
                <span className="before"></span>
                <span><button>전체 서비스</button></span>
            </div>
            <div css={S.SContainer}>
                <span><button>이용정책</button></span>
                <span className="before"></span>
                <span><button>MY플레이스 고객센터</button></span>
                <span className="before"></span>
                <span><button>신고센터</button></span>
                <span className="before"></span>
                <span><button>공지사항</button></span>
            </div>
            <div css={S.SContainer} className="logo-container">
                <button>@ NAVER Corp.</button>
            </div>
        </div>
    );
}

export default Footer;