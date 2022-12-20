import axios from 'axios';
import React, { useEffect, useState } from 'react';

const List = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/user/getUserList").then(res => { setList(res.data) })
    }, [])
    return (
        <div>
            <table border="1" id="userListTable">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>아이디</th>
                        <th>비밀번호</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.pwd}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br /><br />
        </div>
    );
};

export default List;