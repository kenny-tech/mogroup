import React from 'react';
import { View, Text } from 'react-native';

import TitleText from '../components/TitleText';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import Space from '../components/Space';

const Signup = () => {
    return (
        <View style={{flex: 1, alignItems:'flex-start', backgroundColor:'#0037BA'}}>
           <TitleText textSize={48} textColor="#FFFFFF" text="Get-fit" alignText="center"/>
           <Text style={{marginLeft:54, marginTop:20, fontSize: 30}}>Sign Up</Text>
           <View style={{marginLeft: 54, marginRight: 54, marginTop: 60}}></View>
           <TextBox placeholderText={"Full name"} iconName="user" />
           <Space />
           <TextBox placeholderText={"Email Address"} iconName="envelope" />
           <Space />
           <TextBox placeholderText={"Phone Number"} iconName="phone" />
           <Space />
           <TextBox placeholderText={"Password"} iconName="lock"/>
           <Space />
           <Button buttonTitle="Sign Up" buttonBgColor="#FFF" buttonTextColor="#0037BA"/>
        </View>
    )
}

export default Signup;