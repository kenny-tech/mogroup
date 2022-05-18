import React from 'react';
import { View } from 'react-native';

const Panel = () => {
    return (
        <View
            style={{
                width: 350,
                height: 120,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: '#FFFFFF',
                alignSelf: 'center'
            }}
        />
    )
}

export default Panel;