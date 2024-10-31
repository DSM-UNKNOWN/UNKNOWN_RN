import axios from 'axios';
import { API_KEY } from '@env'; 
import { Alert } from "react-native";
import { getStorage, setStorage, removeStorage } from "../../utils/Storage";

const onPatchUser = async ( data ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);

    try {
        const response = await axios.patch(`${API_KEY}/user`, {
            name: data.name,
            phone: data.phone,
            connect: data.connect,
        },
            {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        console.log(API_KEY);
        console.log(token);
        
        if(response.status == 204) {
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                console.error(error);
              Alert.alert('잘못된 요청입니다.');
            } else {
              console.error(error);
              Alert.alert('유저 정보 수정하기 오류입니다.');
            }
        } else {
            console.error(error);
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onPatchUser;