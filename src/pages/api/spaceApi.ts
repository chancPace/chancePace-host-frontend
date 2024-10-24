import axios from 'axios';
import { Space } from '../types';
import Cookies from 'js-cookie'; // 쿠키 라이브러리 추가

const API_URL = 'http://localhost:4000/api/space';

export const addNewSpace = async (spaceData: FormData) => {
    try {
        const token = Cookies.get('token'); // 쿠키에 저장된 'token' 이름으로 가져옴
        const response = await axios.post(
            `${API_URL}/add-new-space`,
            spaceData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data', // FormData 전송을 위한 헤더 설정
                    Authorization: `Bearer ${token}`, // 가져온 토큰을 Authorization 헤더에 추가
                },
            }
        );
        return response.data;
    } catch (error: any) {
        console.error('공간 등록 실패', error.response?.data || error.message);
        throw error;
    }
};
