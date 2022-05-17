import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from '../styles/style';

const Buton = ({ buttonTitle, buttonBgColor, buttonTextColor }) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: buttonBgColor, marginTop: 12}]}>
            <Text style={[styles.buttonText, {color: buttonTextColor}]}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default Buton;