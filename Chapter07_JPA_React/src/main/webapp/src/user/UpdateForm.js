import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateForm = () => {
    const [searchId, setSearchId] = useState("")
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        id: "",
        pwd: "",
    })
    const { name, id, pwd } = form

    const getUser = () => {
        axios.get(`http://localhost:8080/user/getUser?id=${searchId}`)
              .then(res => {
                if(res.data === null){
                    alert("아이디가 없습니다")
                } else {
                    setForm({
                        id : res.data.id,
                        name : res.data.name,
                        pwd : res.data.pwd,
                    })
                }
                
              })
    }

    const onInput = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const update = () => {
        axios.put("http://localhost:8080/user/update", {id, name, pwd})
             .then(res => {
                 alert("수정하였습니다")
                 navigate("/user/list")

             })
             .catch(error => {console.log(error)})
    }

    const onReset = (e) => {
        getUser()
    }
    return (
        <div>
            <h3>
                업데이트
            </h3>

            수정할 아이디 입력
            <input type="text" value={searchId} onChange={e => setSearchId(e.target.value)} />
            <input type="button" value="검색" onClick={getUser} />
            <hr />
            <form action="" id="updateForm">
                <table>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td><input type="text" name="name" value={name} onChange={onInput}/>
                                <div id="nameDiv"></div></td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td><input type="text" value={id} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td><input type="password" value={pwd} name="pwd" id="pwd" onChange={onInput}/>
                                <div id="pwdDiv"></div></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="button" value="수정" onClick={update} />
                                <input type="reset" value="취소" onClick={onReset} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default UpdateForm;