import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UploadForm = () => {
    const [loadImg, setLoadImg] = useState("")
    const [imageSrc, setImageSrc] = useState('');

    const encodeFile = (fileSrc) => {
        const reader = new FileReader();
        setLoadImg(reader.readAsDataURL(fileSrc))
        return new Promise(() => {
            reader.onload = () => {
                setImageSrc(reader.result);
            };
        });
    };

    const imgSubmit = () => {
        axios.post("http://localhost:8080/user/upload", { loadImg },{
            headers: {
              "Content-Type": `multipart/form-data; `,
                }
            })
            .then(res => alert("업로드 됐습니다")).catch()
    }
    return (
        <div>
            <form action="" id="uploadForm">
                {/* <!-- 업로드 버튼을 누르기 전에 카메아 아이콘을 통해서 섵낵한 이미지가 맞는지 확인하기 위해서 이미지를 보이게 한다  --> */}
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
                <input type="file" name="img" id="img" onChange={(e) => {encodeFile(e.target.files[0])}} />
                <br /><br />
                <input type="button" id="uploadBtn" value="이미지 등록" onClick={imgSubmit} />
            </form>
        </div>
    );
};

export default UploadForm;