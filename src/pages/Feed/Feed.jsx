/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as S from "./Style";
import { MdOutlineLocationSearching, MdOutlineBlock } from "react-icons/md";
import CategoryList from './CategoryList';
import PostList from './PostList';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function Feed(props) {

    const [ isFollowingListSelected, setIsFollowingListSelected ] = useState("whole");

    const handleFollowingListOnClick = (e) => {
        setIsFollowingListSelected(e.target.value);
    }

    const handleFollowingLocalOnClick = () => {
        alert("네이버 로그인 하신 후 이용해 주시기 바랍니다.");
    }

    return (
        <div>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                    <div css={S.SSettingBox}>
                        <div css={S.SFollowingList(isFollowingListSelected)}>
                            <div><button className='whole' value={"whole"} onClick={handleFollowingListOnClick}>전체</button></div>
                            <div><button className='following' value={"following"} onClick={handleFollowingListOnClick}>팔로잉</button></div>
                            <div><button onClick={handleFollowingLocalOnClick}>+관심지역</button></div>
                        </div>
                        <div css={S.SLocation}>
                            <span className="before"></span>
                            <button><MdOutlineLocationSearching /> 현위치</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div css={S.SLayout}>
                <div css={S.SCategoryContainer}>
                    <CategoryList />
                </div>
            </div>
            <PostList />
        </div>
    );
}

export default Feed;