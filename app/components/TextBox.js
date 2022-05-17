import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/style';

const TextBox = ({ placeholderText, iconName }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                height: 40,
            }}
            >
            <View
                style={{
                position: "absolute",
                zIndex: 1,
                left: 55,
                }}
            >
                <Icon name={iconName} size={20} color="#FFF" />
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeholderText}
            />
        </View>
    )
}

export default TextBox;