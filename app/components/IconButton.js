import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/style';

const IconButton = ({ buttonBgColor, iconName, buttonWidth, buttonHeight, iconColor, label }) => {
    return (
        <View>
            <View style={[styles.button, {backgroundColor: buttonBgColor, width:buttonWidth, height:buttonHeight, marginTop: 20, borderRadius: 10, padding:20, marginLeft: 18}]}>
                <Icon name={iconName} color={iconColor} size={10} />
            </View>
            <Text style={{marginLeft: 1, marginTop: 10, alignSelf: 'center', color: '#000'}}>{label}</Text>
        </View>
    )
}

export default IconButton;