import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Back from "../../assets/icon/Back";
import CustomText from '../../styles/CustomText';
import Button from "../../components/Button";

import Delete from '../../assets/icon/Delete';
import Logout from '../../assets/icon/Logout';

import onLogout from '../../apis/LogoutAPI';
import onGetUser from "../../apis/GetUserAPI";
import onDelete from '../../apis/DeleteUserAPI';

const PatchPage = ({navigation}) => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await onGetUser();
        if(res) {
            console.log(res);
            setUserData(res);
        }
    };

    const onPressLogout = async () => {
        const res = await onLogout();
        if(res) {
            console.log('logout');
            navigation.navigate("LoginPage", { screen: 'LoginPage' });
        }
    }

    const onPressDelete = async () => {
        const res = await onDelete();
        if(res) { 
            console.log('delete');
            navigation.navigate("LoginPage", { screen: "LoginPage" });
        }
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Back />
                <View style={Styles.headerCotainer}>
                    <CustomText style={Styles.headerFont}>내 정보 수정하기</CustomText>
                </View>
            </View>
            <View style={Styles.body}>
                <View style={Styles.btnCotainer}>
                    <CustomText style={Styles.boldFont}>내 정보</CustomText>
                    <View style={Styles.bContainer}>
                        <View style={Styles.fontCotainer}>
                            <CustomText style={Styles.font}>이름</CustomText>
                            <CustomText style={Styles.font}>아이디</CustomText>
                            <CustomText style={Styles.font}>전화번호</CustomText>
                            <CustomText style={Styles.font}>소속</CustomText>
                        </View>
                        <View style={Styles.fontCotainer}>
                            <CustomText style={Styles.data}>{userData ? userData.name : null}</CustomText>
                            <CustomText style={Styles.data}>{userData ? userData.userid : null}</CustomText>
                            <CustomText style={Styles.data}>{userData ? userData.phone : null}</CustomText>
                            <CustomText style={Styles.data}>{userData ? userData.connect : null}</CustomText>
                        </View>
                    </View>
                    <Button innerText="정보 수정하기" onPress={() => navigation.navigate('DataPage', { screen: 'DataPage'})} />
                </View>
                <TouchableOpacity style={Styles.btn} onPress={() => onPressLogout()}>
                    <CustomText style={Styles.boldFont}>로그아웃</CustomText>
                    <Logout />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn} onPress={() => onPressDelete()}>
                    <CustomText style={Styles.boldFont}>회원 탈퇴하기</CustomText>
                    <Delete />
                </TouchableOpacity>
            </View>
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
        rowGap: 60,
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
        width: constants.width,
        height: constants.height/1.5,
        display: 'flex',
        alignItems: 'center',
        rowGap: 20,
    },
    btn: {
        padding: 15,
        width: constants.width/1.1,
        height: constants.height/10,
        backgroundColor: color.White,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: color.Gray[2],
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnCotainer: {
        padding: 15,
        width: constants.width/1.1,
        height: constants.height/3,
        backgroundColor: color.White,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: color.Gray[2],
        display: 'flex',
        justifyContent: 'space-between',
    },
    boldFont: {
        fontSize: 16,
        color: color.Black,
        fontWeight: 'bold',
    },
    font: {
        fontSize: 14,
        color: color.Black,
        fontWeight: 'bold',
    },
    fontCotainer: {
        rowGap: 10,
    },
    bContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
    },
    data: {
        fontSize: 14,
        fontWeight: 'regular',
        color: color.Black,
    }
})

export default PatchPage;