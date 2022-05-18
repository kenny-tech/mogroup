import React from 'react';

import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../styles/style';
import Space from '../components/Space';
import Label from '../components/Label';
import Panel from '../components/Panel';
import IconButton from '../components/IconButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {

    return (
        <View>
            <View style={{alignItems:'flex-start', backgroundColor:'#0037BA'}}>
                <View
                    style={{
                        width: 350,
                        height: 120,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        backgroundColor: '#FFFFFF',
                        alignSelf: 'center'
                    }}
                >
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 85}}>
                            <Text style={{paddingHorizontal: 15, paddingTop: 15, fontSize: 14}}>Total Balance</Text>
                            <Text style={{paddingLeft: 15, paddingRight: 15, fontSize: 30, fontWeight: 'bold'}}>$2,562.50</Text>
                        </View>
                        <View>
                            <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#EDEDF5' iconName='plus' />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#D3D3D3',
                            borderBottomWidth: 1,
                            width: 310,
                            alignSelf: 'center'
                        }}
                    />
                </View>
            </View>
            <View
                style={{
                    width: 350,
                    height: 120,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: '#FFFFFF',
                    alignSelf: 'center'
                }}
            >
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#FF396F' iconColor='#FFFFFF' iconName='arrow-down' label="Withdraw" />
                    <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#6236FF' iconColor='#FFFFFF' iconName='arrow-right' label="Send"/>
                    <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#1DCC70' iconColor='#FFFFFF' iconName='credit-card' label="Cards"/>
                    <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#FFB400' iconColor='#FFFFFF' iconName='exchange' label="Exchange"/>
                </View>
            </View>
        </View> 
    )
}

export default Home;