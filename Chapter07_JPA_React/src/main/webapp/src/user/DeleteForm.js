import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteForm = () => {
    const [searchId, setSearchId] = useState("")
    const navigate = useNavigate()

    const getUser = () => {
        axios.get(`http://localhost:8080/user/getUser?id=${searchId}`)
            .then(res => {
                if (res.data === null) {
                    alert("아이디가 없습니다")
                    return
                }
                axios.delete(`http://localhost:8080/user/delete?id=${searchId}`)
                     .then(res => {
                        alert("아이디를 삭제했습니다")
                        navigate("/user/list")
                     }).catch(error => {console.log(error)})
                     
            })
    }

    return (
        <div>
            <h3>
                삭제
            </h3>

            삭제할 아이디 입력 <input type="text" value={searchId} onChange={e => setSearchId(e.target.value)}/>
            <input type="button" value="검색" onClick={getUser}/>
        </div>
    );
};

export default DeleteForm;