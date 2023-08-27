/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import React, { useState } from 'react';
import { BsChevronRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";


function Navigation(props) {
    const [ isNavigationArray, setIsNavigationArray ] = useState({
        list: [
        {
            id: 1,
            path: "/feed",
            name: "피드"
        },
        {
            id: 2,
            path: "/timeline",
            name: "타임라인"
        },
        {
            id: 3,
            path: "/review",
            name: "리뷰"
        },
        {
            id: 4,
            path: "/reservationandorder",
            name: "예약·주문"
        },
        {
            id: 5,
            path: "/save",
            name: "저장"
        }
        ]
    });

    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;

    const handleLinkClick = (path) => {
        navigate(path);
    }

    return (
        <div css ={S.SLayout}>
            <ul css ={S.SContainer}>
                {isNavigationArray.list.map(item => {
                    const isSelected = pathName.startsWith(item.path);
                    return (
                        <li css={S.SPath(isSelected)} key={item.id} onClick={() => {handleLinkClick(item.path);}}>{item.name}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navigation;