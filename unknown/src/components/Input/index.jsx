import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet } from "react-native";
import { color } from "../../styles/theme";
import constants from "../../styles/constants";

const Input = ( props ) => {
    const [ text, setText ] = useState('');

    useEffect(() => {
        props.onGetInText(text);
      }, [text]);

    return(
        <TextInput style={Styles.container} placeholder={props.innerText} secureTextEntry={props.state} onChangeText={(innerText) => setText(innerText)}></TextInput>
    );
}

const Styles = StyleSheet.create({
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

export default Input;