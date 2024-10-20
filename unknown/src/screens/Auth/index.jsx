import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity, Text } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Input from "../../components/Input";
import Button from "../../components/Button";

import TextLogo from "../../assets/icon/TextLogo";

const LoginPage = ({navigation}) => {
    const [loginData, setLoginData] = useState({
        userid: "",
        userpw: "",
      });

      const handleInputChange = (text, field) => {
        setLoginData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <TextLogo />
                <View style={Styles.inputContainer}>
                    <Input innerText="아이디" state={false} onGetInText={(text) => handleInputChange(text, "userid")} />
                    <Input innerText="비밀번호" state={true} onGetInText={(text) => handleInputChange(text, "userpw")} />
                </View>
                <View style={Styles.btnCotainer}>
                    <Button innerText="로그인" onPress={() => navigation.navigate("MainScreen", { screen: 'MainScreen' })} />
                    <View style={Styles.btnTextCotainer}>
                        <Text style={Styles.font}>아직 계정이 없으신가요?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SignupPage", { screen: 'SignupPage' })}>
                            <Text style={Styles.fontBtn}>회원가입</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        justifyContent: 'center',
        rowGap: 90,
    },
    inputContainer: {
        rowGap: 20,
        display: 'flex',
        flexDirection: 'column',
    },
    btnCotainer: {
        rowGap: 10,
    },
    btnTextCotainer: {
        gap: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    font: {
        gap: 10,
        height: 20,
        fontSize: 12,
        color: color.Black,
        fontWeight: 'regular',
    },
    fontBtn: {
        color: color.Green[3],
        fontSize: 12,
        fontWeight: 'bold',
    }
})

export default LoginPage;