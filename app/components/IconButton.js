import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/style';

const IconButton = ({ buttonBgColor, iconName, buttonWidth, buttonHeight, iconColor, label }) => {
    return (
        <View>
            <TouchableOpacity style={[styles.button, {backgroundColor: buttonBgColor, width:buttonWidth, height:buttonHeight, marginTop: 20, borderRadius: 10, padding:20}]}>
                <Icon name={iconName} color={iconColor} size={10} />
            </TouchableOpacity>
            <Text style={{marginLeft: 18, marginTop: 10, alignSelf: 'center'}}>{label}</Text>
        </View>
    )
}

export default IconButton;