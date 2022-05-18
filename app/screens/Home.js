import React from 'react';

import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../styles/style';
import IconButton from '../components/IconButton';
import Summary from '../components/Summary';

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
            <View style={{marginTop: 15, marginHorizontal: 17, flexDirection: 'row'}}>
                <Summary label='Income' amount='552.95' amountColor='#1DCC70' />
                <Summary label='Expense' amount='86.45' amountColor='#FF396F' />
            </View>
            <View style={{marginTop: 15, marginHorizontal: 17, flexDirection: 'row'}}>
                <Summary label='Total Bills' amount='552.95' amountColor='#000' />
                <Summary label='Savings' amount='86.45' amountColor='#000' />
            </View>
        </View> 
    )
}

export default Home;