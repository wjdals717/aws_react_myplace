import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { MdOutlineBlock } from 'react-icons/md';
import { RiAlarmWarningLine } from 'react-icons/ri';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';

function FeedHeader({ header }) {
    const [ isReviewerMenuSelected, setIsReviewerMenuSelected ] = useState(false);

    const handleFollowButtonOnClick = () => {
    }
    
    const handleReviewerMenuOnClick = () => {
        setIsReviewerMenuSelected(!isReviewerMenuSelected);
    }

    return (
        <div css={S.SLiContainer}>
            <button css={S.SUSerBox}>
                <div css={S.SProfileBox}>
                    <img src={header.profileImg} alt="프로필" />
                </div>
                <div css={S.SUserInfoBox}>
                    {header.username}
                    <div>
                        <span>사진리뷰{header.reviewCount}</span>
                        <span> · 팔로워{header.Followers}</span>
                    </div>
                </div>
            </button>
            <button css={S.SFollowButton} onClick={handleFollowButtonOnClick}>팔로우</button>
            <button css={S.SReviewerMenuButton} onClick={handleReviewerMenuOnClick}><HiOutlineEllipsisVertical /></button>
            <div css={S.SReviewerMenu(isReviewerMenuSelected)}>
                <button> 리뷰/리뷰어 신고 <RiAlarmWarningLine /> </button>
                <button> 리뷰어 차단 <MdOutlineBlock /> </button>
            </div>
        </div>
    );
}

export default FeedHeader;