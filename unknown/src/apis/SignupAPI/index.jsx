import axios from 'axios';
import { API_KEY } from '@env'; 
import { Alert } from "react-native";

const onSignup = async ( data ) => {

    try {
        const response = await axios.post(`${API_KEY}/user/signup`, {
            userid: data.userid,
            userpw: data.userpw,
            name: data.name,
            state: "구급대원",
            phone: data.phone,
            connect: data.connect,
    }); 
    
    console.log(API_KEY);
        
        if(response.status == 201) {
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 409) {
              Alert.alert('아이디가 이미 존재합니다.');
            } else {
              Alert.alert('회원가입 오류입니다.');
            }
        } else {
            console.error(error);
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onSignup;