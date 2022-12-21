import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../css/writeForm.module.css"

const WriteForm = () => {
    const [form, setForm] = useState({
        name: "",
        id: "",
        pwd: "",
    })
    const navigate = useNavigate()
    const { name, id, pwd } = form

    const [formDiv, setFormDiv] = useState({
        nameDiv: "",
        idDiv: "",
        pwdDiv: "",
    })
    const { nameDiv, idDiv, pwdDiv } = formDiv

    const onInput = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const memberSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setFormDiv({
                nameDiv : "이름을 입력하세요"
            })
            return
        } else if (!id) {
            setFormDiv({
                idDiv : "아이디를 입력하세요"
            })
            return
        } else if (!pwd) {
            setFormDiv({
                pwdDiv : "비밀번호를 입력하세요"
            })
            return
        }

        axios.post("http://localhost:8080/user/write", {name, id, pwd})
            .then(() => {
                alert("가입이 성공했습니다")
                navigate("/user/list")
        })
            .catch(error => console.log(error))
    }

    const checkId = () => {
        axios.get(`http://localhost:8080/user/checkId?id=${id}`)
            .then(res => {
                if (res.data === "non_exist") {
                    setFormDiv({
                        idDiv : "사용 가능한 아이디입니다"
                    })
                } else {
                    setFormDiv({
                        idDiv : "중복 아이디입니다"
                    })
                }
            })
            .catch(error => console.log(error))
    }

    const onReset = (e) => {
        e.preventDefault()
        setForm({
            id:"",
            name:"",
            pwd:""
        })
    }
    return (
        <div>
            <form action="/write" className={styles.writeForm}>
                <table>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" name='name' value={name} onChange={onInput} />
                                <div id="nameDiv">{nameDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" name='id' value={id} onChange={onInput} onBlur={checkId} />
                                <div id="idDiv"> {idDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" name='pwd' value={pwd} onChange={onInput} />
                                <div id="pwdDiv">{pwdDiv}</div></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={memberSubmit}>등록</button>
                                <button onClick={onReset}>취소</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default WriteForm;