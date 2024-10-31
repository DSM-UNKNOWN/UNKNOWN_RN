import axios from 'axios';
import { Alert } from "react-native";
import { API_KEY } from '@env'; 
import { getStorage, setStorage, removeStorage } from "../../utils/Storage";

const onLogin = async ( data ) => {

    try {
        const response = await axios.post(`${API_KEY}/user/login`, {
            userid: data.userid,
            userpw: data.userpw
        });
        console.log(API_KEY);

        const accessToken = response.data.accessToken;
        
        if(response.status == 201) {
            await setStorage('token', JSON.stringify(accessToken));
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
              Alert.alert('비밀번호가 일치하지 않습니다.');
            } else if (error.response.status === 404) {
              Alert.alert('아이디를 찾을 수 없습니다.');
            } else {
              Alert.alert('로그인 오류입니다.');
            }
        } else {
            console.error(error);
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onLogin;