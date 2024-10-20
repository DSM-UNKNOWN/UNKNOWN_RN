import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Back from "../../assets/icon/Back";
import CustomText from '../../styles/CustomText';
import InputLabel from "../../components/InputLabel";
import Button from "../../components/Button";

const DataPage = ({navigation}) => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        connect: ""
      });

      const handleInputChange = (text, field) => {
        setData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Back />
                <View style={Styles.headerCotainer}>
                    <CustomText style={Styles.headerFont}>내 정보 수정하기</CustomText>
                </View>
            </View>
            <View style={Styles.InputContainer}>
                <InputLabel text="이름" data={'000'} onGetInText={(text) => handleInputChange(text, "name")} />
                <InputLabel text="전화번호" data={'01012345678'} onGetInText={(text) => handleInputChange(text, "phone")} />
                <InputLabel text="소속" data={'대전소방서'} onGetInText={(text) => handleInputChange(text, "connect")} />
            </View>
            <Button innerText="저장하기" onPress={() => navigation.navigate('PatchPage', { screen: 'PatchPage'})} />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: constants.width,
        height: constants.height,
        backgroundColor: color.Gray[0],
        alignItems: 'center',
        rowGap: 120,
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
    InputContainer: {
        rowGap: 15,
    }
})

export default DataPage;