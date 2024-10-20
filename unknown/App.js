import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default class extends React.Component{

  state={
    isLoading : true
  };

  componentDidMount= async() => {
    setTimeout(() => {this.setState({isLoading: false})}, 3000);
  }

  render(){
    if(this.state.isLoading){

      return <></>

    }else{

      return (
        <NavigationContainer>
          <></>
        </NavigationContainer>
      );
    }
  }
}