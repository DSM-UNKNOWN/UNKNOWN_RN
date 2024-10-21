import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity, Text } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Back from "../../assets/icon/Back";
import CustomText from '../../styles/CustomText';
import Button from "../../components/Button";
import InputLabel from "../../components/InputLabel";

const InputPage = ({navigation}) => {
    const [data, setData] = useState({
		hospitalSelect: "",
		hospitalName: "",
		hospitalMonth: "",
		hospitalBlood: "",
		hospitalInjury: "",
		hospitalDisease: "",
		hospitalSurgery: "",
    });

      const handleInputChange = (text, field) => {
        setData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <View style={Styles.header}>
                    <Back />
                    <View style={Styles.headerCotainer}>
                        <CustomText style={Styles.headerFont}>응급 의료 정보 찾기</CustomText>
                    </View>
                </View>
                <View style={Styles.body}>
                    <InputLabel text="병원 선택" onGetInText={(text) => handleInputChange(text, "hospitalSelect")} />
                    <InputLabel text="환자 성명" onGetInText={(text) => handleInputChange(text, "hospitalName")} />
                    <InputLabel text="환자 생년월일" onGetInText={(text) => handleInputChange(text, "hospitalMonth")} />
                    <InputLabel text="혈액형" onGetInText={(text) => handleInputChange(text, "hospitalBlood")} />
                    <InputLabel text="부상부위" onGetInText={(text) => handleInputChange(text, "hospitalInjury")} />
                    <InputLabel text="질병 여부" onGetInText={(text) => handleInputChange(text, "hospitalDisease")} />
                    <InputLabel text="수술 여부" onGetInText={(text) => handleInputChange(text, "hospitalSurgery")} />
                </View>
                <Button innerText="정보 전송하기" onPress={() => navigation.navigate("MainPage", { screen: 'MainPage' })} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.Gray[0],
        alignItems: 'center',
        rowGap: 40,
    },
    header: {
        paddingLeft: 20,
        width: constants.width,
        height: constants.height/20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    headerCotainer: {
        display: 'flex',
        alignItems: 'center',
        width: constants.width/1.25,
        height: constants.height/20,
    },
    headerFont: {
        fontSize: 14,
        color: color.Black,
    },
    body: {
        rowGap: 20,
    }
})

export default InputPage;