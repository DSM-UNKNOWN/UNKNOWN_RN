import axios from 'axios';
import { API_KEY } from '@env'; 
import { Alert } from "react-native";
import { getStorage, setStorage, removeStorage } from "../../utils/Storage";

const onPost = async ( data ) => {

    const result = await getStorage('token');
    const token = result && JSON.parse(result);

    try {
        const response = await axios.post(`${API_KEY}/feed/post`, {
            phone: data.phone,
            hospitalSelect: data.hospitalSelect,
            hospitalName: data.hospitalName,
            hospitalMonth: data.hospitalMonth,
            hospitalBlood: data.hospitalBlood,
            hospitalInjury: data.hospitalInjury,
            hospitalDisease: data.hospitalDisease,
            hospitalSurgery: data.hospitalSurgery,
        },
            {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    
        console.log(API_KEY);
        console.log(token);
        
        if(response.status == 201) {
            return true;
        }
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                console.error(error);
              Alert.alert('잘못된 요청입니다.');
            } else {
                console.error(error);
              Alert.alert('등록 오류입니다.');
            }
        } else {
            console.error(error);
            Alert.alert('네트워크 오류입니다.');
        }
        return false;
    }
};

export default onPost;