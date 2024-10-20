import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

import CustomText from "../../styles/CustomText";

const InputLabel = ( props ) => {
    const [ text, setText ] = useState('');

    useEffect(() => {
        props.onGetInText(text);
      }, [text]);

    return(
        <View style={Styles.InputContainer}>
            <CustomText>{props.text}</CustomText>
            <TextInput style={Styles.container} value={props.data} onChangeText={(innerText) => setText(innerText)}></TextInput>
        </View>
    );
}

const Styles = StyleSheet.create({
    InputContainer: {
        width: constants.width/1.2,
        display: 'flex',
        alignItems: 'flex-start',
        rowGap: 5,
    },
    container: {
        width: constants.width/1.2,
        height: constants.height/20,
        backgroundColor: color.White,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    }
})

export default InputLabel;