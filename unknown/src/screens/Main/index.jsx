import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, StyleSheet, TouchableOpacity } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import SmallTextLogo from "../../assets/icon/SmallTextLogo";
import CustomText from '../../styles/CustomText';

import Data from "../../assets/icon/Data";
import Patch from "../../assets/icon/Patch";
import Search from "../../assets/icon/Search";

const MainPage = ({navigation}) => {

    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <SmallTextLogo />
            </View>
            <View style={Styles.body}>
                <View style={Styles.btn}>
                    <View style={Styles.fontContainer}>
                        <CustomText style={Styles.boldFont}>000님</CustomText>
                        <CustomText style={Styles.font}>오늘도 힘내세요</CustomText>
                    </View>
                    <Data />
                </View>
                <TouchableOpacity style={Styles.btnCenter} onPress={() => navigation.navigate('SearchPage', { screen: 'SearchPage'})}>
                    <View style={Styles.fontContainer}>
                        <CustomText style={Styles.boldFont}>응급 의료 정보 찾기</CustomText>
                        <CustomText style={Styles.font}>응급 환자를 이송할 수 있는 최단 경로를 확인하세요</CustomText>
                    </View>
                    <View style={Styles.iconCotainer}>
                        <Search />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.btn} onPress={() => navigation.navigate('PatchPage', { screen: 'PatchPage'})}>
                    <View style={Styles.fontContainer}>
                        <CustomText style={Styles.boldFont}>내 정보 수정하기</CustomText>
                        <CustomText style={Styles.font}>바뀐 정보를 수정하세요</CustomText>
                    </View>
                    <Patch />
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 60,
    },
    header: {
        paddingLeft: 20,
        width: constants.width,
        height: constants.height/20,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
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
        height: constants.height/8,
        backgroundColor: color.White,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: color.Gray[2],
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnCenter: {
        padding: 15,
        width: constants.width/1.1,
        height: constants.height/3,
        backgroundColor: color.White,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: color.Gray[2],
        display: 'flex',
    },
    boldFont: {
        fontSize: 16,
        color: color.Black,
        fontWeight: 'bold',
    },
    font: {
        fontSize: 13,
        color: color.Gray[6],
        fontWeight: 'regular',
    },
    fontContainer: {
        rowGap: 15,
    },
    iconCotainer: {
        width: constants.width/1.2,
        height: constants.height/4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default MainPage;