import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import FeedHeader from './FeedHeader/FeedHeader';
import FeedBody from './FeedBody/FeedBody';
import FeedFooter from './FeedFooter/FeedFooter';
import { useRecoilState } from 'recoil';
import { categorySelectedState } from '../../store/NavigationStore';

const SUlLayout = css`
    position: relative;
    overflow-anchor: none;
`;

const SLiLayout = css`
    margin: 0 auto;
    padding: 16px 20px 28px;
    align-items: center;
    max-width: 720px;
    width: 100%;
`;

function FeedLi(props) {
    const feedLiArray= [
        {   id: 1,
            category: 9,
            header : {
                profileImg : "https://i.pinimg.com/564x/31/20/00/3120002716e4e65699d86975f60e3419.jpg",
                username: "teddybear",
                reviewCount: 32,
                Followers: 20
            },
            body : {
                img1: "https://i.pinimg.com/564x/b4/b9/96/b4b99672c8260cbf16f77b375a2f3a58.jpg",
                img2: "https://i.pinimg.com/564x/f9/63/6c/f9636cad0daca020e2ea3018c2b0d7a2.jpg",
                img3: "https://i.pinimg.com/564x/c1/25/a8/c125a8715b0b9a0c1f5ca3bb62355732.jpg",
                imgLocation: "부산시 광안동 최신",
                content: "날씨가 더웠지만 물이 깨끗해서 아이들과 재밌게 놀았어요~",
                hashTag: "✨ 물이 깨끗해요",
                visitedDate: "8.5 토 방문"
            },
            footer : {
                storeName: "광안리 해수욕장",
                classtification: "해수욕장",
                storeLocation : "부산 해운대구 광안동"
            }
        },
        {   id: 2,
            category: 3,
            header : {
                profileImg : "https://i.pinimg.com/564x/fb/d8/69/fbd869ba975f5a05c5e59fd9328fc6db.jpg",
                username: "heart",
                reviewCount: 15,
                Followers: 5
            },
            body : {
                img1: "https://i.pinimg.com/564x/f1/8b/c4/f18bc4a7dee6a455b0400f4954aaf533.jpg",
                img2: "https://i.pinimg.com/564x/4e/6c/94/4e6c944f32e41bf6947eaf92e76cae79.jpg",
                img3: "https://i.pinimg.com/564x/cf/fc/cf/cffccfb238ad5756b4de8a8493cacfa9.jpg",
                imgLocation: "서울시 성수동",
                content: "카페가 너무 이쁘고 커피 맛있어요",
                hashTag: "☕ 커피가 맛있어요",
                visitedDate: "8.20 일 방문"
            },
            footer : {
                storeName: "최고당 커피",
                classtification: "카페, 디저트",
                storeLocation : "서울 성동구 성수동"
            }
        },
        {   id: 3,
            category: 4,
            header : {
                profileImg : "https://i.pinimg.com/564x/21/63/f3/2163f3ada6149d89f0bb9144e55aa469.jpg",
                username: "pubao",
                reviewCount: 55,
                Followers: 999999
            },
            body : {
                img1: "https://i.pinimg.com/564x/b7/93/c6/b793c659aa9785ee3c588e7122727b51.jpg",
                img2: "https://i.pinimg.com/564x/74/42/9f/74429fe6d2060dfb971251eeca547103.jpg",
                img3: "",
                imgLocation: "용인시 에버랜드",
                content: "이 집 당근, 사과 맛집이네요. 다음에 또 올래요~ ",
                hashTag: "🍎 음식이 맛있어요",
                visitedDate: "3.11 토 방문"
            },
            footer : {
                storeName: "바오 랜드",
                classtification: "동물",
                storeLocation : "경기도 용인시 에버랜드"
            }
        },
        {   id: 4,
            category: 1,
            header : {
                profileImg : "https://i.pinimg.com/564x/68/75/a0/6875a08aefc9113636b90a096284928c.jpg",
                username: "nooooo",
                reviewCount: 10,
                Followers: 5
            },
            body : {
                img1: "https://i.pinimg.com/564x/68/dd/73/68dd73d4e1cf64ad98479c7634e5ec42.jpg",
                img2: "",
                img3: "",
                imgLocation: "여수시 봉산동 최신",
                content: " 반찬이랑 삼겹살이랑 조합 굿~ ",
                hashTag: "🥓 음식이 맛있어요",
                visitedDate: "8.29 화 방문"
            },
            footer : {
                storeName: "맛나 삼겹살",
                classtification: "돼지고기 구이",
                storeLocation : "전라남도 여수시 봉산동"
            }
        },
        {   id: 5,
            category: 2,
            header : {
                profileImg : "https://i.pinimg.com/564x/3d/8a/9f/3d8a9fca3addac083ded041f480e3f85.jpg",
                username: "cutiecat",
                reviewCount: 5,
                Followers: 999
            },
            body : {
                img1: "https://i.pinimg.com/564x/58/9d/0c/589d0cffdadf422f1faacaf715148a6b.jpg",
                img2: "https://i.pinimg.com/564x/2b/b5/ef/2bb5ef2558220a4a3f4a1458a40d0b4b.jpg",
                img3: "https://i.pinimg.com/564x/32/68/7d/32687d6be4a11b3409692e2d233979c7.jpg",
                imgLocation: "부산시 연지동 최신",
                content: "공원이 깨끗해서 친구와 함께 피크닉하기 좋아요",
                hashTag: "🏞️ 청결해요",
                visitedDate: ""
            },
            footer : {
                storeName: "부산시민공원",
                classtification: "공원",
                storeLocation : "부산 부산진구 연지동"
            }
        }
    ];

    const [ selectedButton , setSelectedButton ] = useRecoilState(categorySelectedState);

    return (
        <ul css={SUlLayout}>
            {feedLiArray.filter(item => (selectedButton === "all" ? true: (selectedButton === item.category))).map(item => (
                <li key={item.id}>
                    <div css={SLiLayout}>
                        <FeedHeader header={item.header}/>
                        <FeedBody body={item.body}/>
                        <FeedFooter footer={item.footer}/>
                    </div>
                </li>
            ))};
        </ul>
    );
}

export default FeedLi;