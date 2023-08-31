/** @jsxImportSource @emotion/react */
import React from 'react';
import * as S from "./Style";
import FeedCategory from '../../components/FeedCategory/FeedCategory';
import FeedHeader from '../../components/FeedHeader/FeedHeader';
import FeedLi from '../../components/FeedLi/FeedLi';

function Feed(props) {
    return (
        <div>
            <div css={S.SLayout}>
                <FeedHeader />
            </div>
            <div css={S.SLayout}>
                <FeedCategory />
            </div>
            <FeedLi />
        </div>
    );
}

export default Feed;