import axios from 'axios';
import React, { useState } from 'react';

const WriteForm = () => {
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [pwd, setPwd] = useState("")
    const [nameDiv, setNameDiv] = useState("")
    const [idDiv, setIdDiv] = useState("")
    const [pwdDiv, setPwdDiv] = useState("")

    const memberSubmit = (e) => {
        e.preventDefault();
        setNameDiv("")
        setIdDiv("")
        setPwdDiv("")
        if(!name){
            setNameDiv("이름을 입력하세요")
            return
        } else if(!id){
            setIdDiv("아이디를 입력하세요")
            return
        }else if(!pwd){
            setPwdDiv("비밀번호를 입력하세요")
            return
        }
        
        axios.post("http://localhost:8080/user/write",{
            id: id,
            name: name,
            pwd: pwd
        }).then(() => {
            alert("가입이 성공했습니다")
        }).catch(error => console.log(error))
    }

    const checkId = () => {
        axios.post("http://localhost:8080/user/checkId",id)
             .then(res => {
                if(res.data === "non_exist"){
                    setIdDiv("사용 가능한 아이디입니다")
                } else {
                    setIdDiv("중복 아이디 입니다")
                }
             })
             .catch(error => console.log(error))
    }
    return (
        <div>
            <form action="/write" id="writeForm" onSubmit={memberSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" name='name' onChange={e => setName(e.target.value)} />
                                <div id="nameDiv" >{nameDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" name='id' onChange={e => setId(e.target.value)} onBlur={checkId}/>
                                <div id="idDiv"> {idDiv}</div>
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" name='pwd' onChange={e => setPwd(e.target.value)}/>
                                <div id="pwdDiv">{pwdDiv}</div></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button>등록</button>
                                <input type="reset" value="취소" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default WriteForm;