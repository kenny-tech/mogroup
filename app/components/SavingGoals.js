import React from 'react';
import { View } from 'react-native';
import Label from './Label';
import PercentageBar from './PercentageBar'

const SavingGoals = ({ name, description, amount, percentageDone }) => {
    return (
        <View style={{
            width: 350,
            height: 120,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            alignSelf: 'center',
            paddingTop: 15,
            marginBottom: 10,
            paddingLeft: 10
        }}>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <View style={{marginRight: 100}}>
                    <Label labelText={name} labelTextColor='#000' labelSize={20} />
                    <Label labelText={description} labelTextColor='#000' labelSize={12} />
                </View>
                <View>
                    <Label labelText={'N'+amount} labelTextColor={'#000'} labelSize={18} />
                </View>
            </View>
            <View style={{marginHorizontal: 10}}>
                <PercentageBar
                    height={20}
                    backgroundColor={'grey'}
                    completedColor={'blue'}
                    percentage={percentageDone+'%'}
                />         
            </View>
        </View>    
    )
}

export default SavingGoals;