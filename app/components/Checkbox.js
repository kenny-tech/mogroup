import React, { useState } from 'react';
import { View, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const Checkbox = ({ label }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={{marginLeft: 30, flexDirection: 'row' }}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                tintColors={{ true: '#0037BA', false: 'black' }}
            />
            <Text style={{color: '#000', fontSize: 16, fontWeight: '300', lineHeight: 24, marginTop: 5}}>{label}</Text>
        </View>
    )
}

export default Checkbox;