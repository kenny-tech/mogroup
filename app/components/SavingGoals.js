import React from 'react';
import { View } from 'react-native';
import Label from './Label';

const SavingGoals = ({ name, description, amount }) => {
    return (
        <View
            style={{
                width: 350,
                height: 80,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                alignSelf: 'center',
                flexDirection: 'row',
                paddingTop: 15,
                marginBottom: 10,
                paddingLeft: 10
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
    )
}

export default SavingGoals;