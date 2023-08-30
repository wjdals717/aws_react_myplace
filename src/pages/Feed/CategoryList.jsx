/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as S from "./Style";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

function List(props) {
    const [ mainMenuListArray, setMainMenuListArray ] = useState({
        lists: [
            { id: 1, name: "한식"},
            { id: 2, name: "피크닉" },
            { id: 3, name: "카페" },
            { id: 4, name: "체험관광" },
            { id: 5, name: "양식" },
            { id: 6, name: "테마파크" },
            { id: 7, name: "일식" },
            { id: 8, name: "클래스·소품" },
            { id: 9, name: "물놀이" },
            { id: 10, name: "분식/치킨" },
            { id: 11, name: "역사유적" },
            { id: 12, name: "중식" },
            { id: 13, name: "레저·액티비티" },
            { id: 14, name: "아시아/퓨전 음식" },
            { id: 15, name: "자연명소" },
            { id: 16, name: "뷔페/레스토랑" },
            { id: 17, name: "캠핑" },
            { id: 18, name: "문화예술" },
            { id: 19, name: "아이와 함께" },
            { id: 20, name: "등산·트레킹" },
            { id: 21, name: "낚시" },
            { id: 22, name: "숙박" }
        ]
    });

    // const [ isCategorySelected, setIsCategorySelected ] = useState("");
    const [ selectedButton , setSelectedButton ] = useState();
    const [ translate, setTranslate] = useState(0);   // 상태 값은 useState로 관리

    const handleCategoryButtonOnClick = (id) => {
        setSelectedButton(id);
    }

    const handleMoveLeftButtonOnClick = () => {
        if( translate === -1203) {
            setTranslate(-483);
        } else if(translate === -483 || translate === - 720) {
            setTranslate(0);
        }
    }

    const handleMoveRightButtonOnClick = () => {
        if(translate === 0) {
            setTranslate(-720);
        } else if(translate === -720) {
            setTranslate(-1203);
        }
        console.log(translate);
    }

    return (
        <div css={S.SListBox(translate)}>
            <div css={S.SList(translate)}>
                {mainMenuListArray.lists.map(item => {
                    return (
                        <span><button className={`${selectedButton === item.id ? 'custom-button' : ''}`} css={S.SListButton} key={item.id} onClick={()=>{handleCategoryButtonOnClick(item.id);}}>{item.name}</button></span>
                        );
                    })}
            </div>
            <button className='move-category-left' onClick={handleMoveLeftButtonOnClick}><SlArrowLeft /></button>
            <button className='move-category-right' onClick={handleMoveRightButtonOnClick}><SlArrowRight /></button>
        </div>
    );
}

export default List;