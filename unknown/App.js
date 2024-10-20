import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoadingPage from "./src/screens/Loading";
import UserScreen from './src/navigation/UserScreen';

export default class extends React.Component{

  state={
    isLoading : true
  };

  componentDidMount= async() => {
    setTimeout(() => {this.setState({isLoading: false})}, 3000);
  }

  render(){
    if(this.state.isLoading){
      
      return <LoadingPage />
        
    }else{

      return (
        <NavigationContainer>
          <UserScreen />
        </NavigationContainer>
      );
      
    }
  }
}