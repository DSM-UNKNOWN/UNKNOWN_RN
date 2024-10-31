import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Input from "../../components/Input";
import Button from "../../components/Button";
import TextLogo from "../../assets/icon/TextLogo";

import onSignup from '../../apis/SignupAPI';

const SignupPage = ({navigation}) => {
    const [signupData, setSignupData] = useState({
        userid: "",
        userpw: "",
        name: "",
        phone: "",
        connect: "",
      });

      const handleInputChange = (text, field) => {
        setSignupData(prevData => ({
          ...prevData,
          [field]: text
        }));
      };

    const onClickSignup = async () => {
        if(signupData !== null) {
            try {
                const signupState = await onSignup(signupData);
                if (signupState) {
                  navigation.navigate("LoginPage", { screen: 'LoginPage' });
                }
            } catch (error) {
                console.log("회원가입 오류");
            }
        }
    };

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={Styles.container}>
                <TextLogo />
                <View style={Styles.inputContainer}>
                    <Input innerText="이름" state={false} onGetInText={(text) => handleInputChange(text, "name")} />
                    <Input innerText="아이디" state={false} onGetInText={(text) => handleInputChange(text, "userid")} />
                    <Input innerText="비밀번호" state={true} onGetInText={(text) => handleInputChange(text, "userpw")} />
                    <Input innerText="전화번호 ex)01012345678" state={false} onGetInText={(text) => handleInputChange(text, "phone")} />
                    <Input innerText="소속 ex)대전소방서" state={false} onGetInText={(text) => handleInputChange(text, "connect")} />
                </View>
                <Button innerText="회원가입" onPress={() => onClickSignup()} />
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
})

export default SignupPage;