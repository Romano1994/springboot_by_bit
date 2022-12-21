import axios from 'axios';
import React, { useEffect, useState } from 'react';

const List = () => {
    const [list, setList] = useState([])
    const [keyword, setKeyword] = useState("")
    const [searchOption, setSearchOption] = useState("name")
    useEffect(() => {
        axios.get("http://localhost:8080/user/getUserList").then(res => { setList(res.data) })
    }, [])

    const onSearch = (e) => {
        e.preventDefault()
        axios.get('http://localhost:8080/user/search?', {
            params: {
                searchOption,
                keyword
            }
        })
            .then(res => {setList(res.data)})
    }
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
            <form id="searchForm" style={{ width: "450px", padding: "30px" }}>
                <select id="searchOption" value={searchOption} onChange={e => setSearchOption(e.target.value)} >
                    <option value="name">이름</option>
                    <option value="id">아이디</option>
                </select>
                <input type="text" id="keyword" value={keyword} onChange={e => setKeyword(e.target.value)} />
                <button type="button" onClick={onSearch}>검색</button>
            </form>
        </div>
    );
};

export default List;