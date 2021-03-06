import React from 'react';
import { View, Text } from 'react-native';

const Summary = ({ label, amount, amountColor}) => {
    return (
        <View
            style={{
                width: 162,
                height: 100,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                marginRight: 20,
                padding: 20
            }}
        >
            <Text style={{color: '#000'}}>{label}</Text>
            <Text style={{color: amountColor, fontSize: 27}}>{amount}</Text>
        </View>
    )
}

export default Summary;