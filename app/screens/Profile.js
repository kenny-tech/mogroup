import React from 'react';

import { View, Image, Text } from 'react-native';
import Label from '../components/Label';
import Space from '../components/Space';

const Profile = () => {

    return (
        <View style={{flex: 1, alignItems:'flex-start', backgroundColor:'#0037BA'}}>
            <View style={{flexDirection: 'row', marginLeft: 40, marginTop: 20}}>
                <Image
                    source={require('../images/profile.png')}
                />    
                <Text style={{paddingLeft: 10, paddingTop: 50, fontWeight: 'bold', fontSize: 22}}>Michael Mololuwa</Text>
            </View>
            <View style={{alignItems: 'center', width: '100%'}}>
                <Space />
                <Label labelTextColor="#FFFFFF" labelText="Account settings" labelSize={22} />
                <Space />
                <Label labelTextColor="#FFFFFF" labelText="Cart" labelSize={22} />
                <Space />
                <Label labelTextColor="#FFFFFF" labelText="Track your order" labelSize={22} />
                <Space />
                <Label labelTextColor="#FFFFFF" labelText="Language settings" labelSize={22} />
                <Space />
                <Label labelTextColor="#FFFFFF" labelText="Change password" labelSize={22} />
                <Space />
                <Label labelTextColor="#FFFFFF" labelText="Log out" labelSize={22} />
                <Space />
            </View>
        </View>
    )
}

export default Profile;