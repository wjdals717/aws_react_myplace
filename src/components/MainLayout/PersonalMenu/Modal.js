/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Modal = css`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000bb;
`;

const ModalContainer = css`
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    background-color: #fafafa;
`;

const ModalMain = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 20px;
    width: 300px;
`;

const ModalFooter = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px 20px;
    width: 300px;
`;

export const openModal = () => {
    const modal = document.querySelector(".modal");
    modal.className.remove("invisible");
    // modal.classList.remove("invisible");
}

const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.className.add("invisible");
    // modal.classList.add("invisible");
    modal.innerHTML = "";
}

const modifyModal = () => {
    const modal = document.querySelector(".modal");
    console.log("여기 옴?");
    modal.innerHTML =`
        <div css={ModalContainer}>
            <main css={ModalMain}>
                <strong>
                    인증은<br />
                    모바일 환경에서만<br />
                    가능합니다
                </strong>
            </main>
            <footer css={ModalFooter}>
                <button onclick="closeModal()">닫기</button>
            </footer>
        </div>
    `;
}