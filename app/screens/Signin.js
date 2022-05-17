import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import TitleText from '../components/TitleText';
import Label from '../components/Label';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import Space from '../components/Space';

const Signin = ({ navigation }) => {
    return (
        <View style={{flex: 1, alignItems:'flex-start', backgroundColor:'#0037BA'}}>
           <TitleText textSize={35} textColor="#FFFFFF" text="Welcome back"/>
           <Label labelTextColor="#FFFFFF" labelText="Sign in to continue" labelSize={18} />
           <View style={{marginLeft: 54, marginRight: 54, marginTop: 60}}></View>
           <TextBox placeholderText={"Full name"} iconName="user" />
           <Space />
           <TextBox placeholderText={"Password"} iconName="lock"/>
           <Label labelTextColor="#FFFFFF" labelText="Forgot password?" labelSize={14} />
           <Space />
           <Button buttonTitle="Sign in" buttonBgColor="#FFF" buttonTextColor="#0037BA"/>
           <View style={{marginBottom: 10}}></View>
           <IconButton buttonTitle="Connect with Facebook" buttonBgColor="#FFF" buttonTextColor="#0037BA" iconName="facebook"/>
           <View style={{marginTop: 70}}></View>
           <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 16}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>
           </View>
        </View>
    )
}

export default Signin;