import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import List from '../user/List';
import WriteForm from '../user/WriteForm';

const Index = () => {

    return (
        <div>
            <>
                <h3>***메인 화면***</h3>
                <hr />
                <p> <Link to="/">홈</Link></p>
                <p> <Link to="/user/writeForm">입력</Link></p>
                <p> <Link to="/user/list">출력</Link></p>
                <p> <Link to="/user/updateForm">수정</Link></p>
                <p> <Link to="/user/deleteForm">삭제</Link></p>
                <p> <Link to="/user/uploadForm">파일 등록</Link></p>
            </>


        
        </div>
    );
};

export default Index;