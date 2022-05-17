import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/style';

const IconButton = ({ buttonTitle, buttonBgColor, buttonTextColor, iconName }) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: buttonBgColor, marginTop: 12}]}>
            <View style={{flexDirection:'row'}}>
                <Icon name={iconName} size={20} color="#0037BA" style={{marginTop:5, paddingRight: 5}} />
                <Text style={[styles.buttonText, {color: buttonTextColor}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default IconButton;