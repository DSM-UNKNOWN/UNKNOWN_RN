import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import Back from "../../assets/icon/Back";
import CustomText from '../../styles/CustomText';
import Button from "../../components/Button";

const SearchPage = ({navigation}) => {

    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Back />
                <View style={Styles.headerCotainer}>
                    <CustomText style={Styles.headerFont}>응급 의료 정보 찾기</CustomText>
                </View>
            </View>
            <View style={Styles.body}>
                <MapView
                style={Styles.map}
                initialRegion={{
                    latitude: 36.321655, //위도
                    longitude: 127.378953, //경도
                    latitudeDelta: 0.431948,
                    longitudeDelta: 0.372948,
                }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                >
                    {/* {list.map((item, index) => (
                        <Marker
                            coordinate={{latitude: item.latitude, longitude: item.longitude }}
                            title={item.title}
                            description={item.description}
                            key={index}
                        />
                    ))} */}
                </MapView>
                <Button innerText="환자 정보 입력하기" onPress={() => navigation.navigate("InputPage", { screen: 'InputPage' })} />
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
    map: {
        width: constants.width,
        height: constants.height/1.3,
    },
    body: {
        height: constants.height/1.2,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default SearchPage;