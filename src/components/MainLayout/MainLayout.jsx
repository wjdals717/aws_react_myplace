/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import Header from "./Header/Header";
import PersonalMenu from "./PersonalMenu/PersonalMenu";
import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Feed from "../../pages/Feed/Feed";
import TimeLine from "../../pages/TimeLine/TimeLine";
import Review from "../../pages/Review/Review";
import ReservationAndOrder from "../../pages/ReservationAndOrder/ReservationAndOrder";
import Save from "../../pages/Save/Save";
import Footer from "./Footer/Footer";

const SLayout = css`
    
`;

function MainLayout(props) {
    return (
        <div css={SLayout}>
            <Header />
            <PersonalMenu />
            <Navigation />
            <Routes>
                {/* path → 페이지 주소창에 입력, element → 페이지 경로 지정 */}
                <Route path="/" element={<Feed />}/>
                <Route path="/feed" element={<Feed />}/>
                <Route path="/timeline" element={<TimeLine />}/>
                <Route path="/review" element={<Review />}/>
                <Route path="/reservationandorder" element={<ReservationAndOrder />}/>
                <Route path="/save" element={<Save />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default MainLayout;