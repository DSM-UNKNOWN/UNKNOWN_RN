import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

const LoadingPage = ({navigation}) => {

    return(
        <View style={Styles.container}>
            <></>
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
        justifyContent: 'center',
    },
})

export default LoadingPage;