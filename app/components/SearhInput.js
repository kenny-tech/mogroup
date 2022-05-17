import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/style';

const SearchInput = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignSelf: "center",
                height: 60,
            }}
            >
            <View
                style={{
                position: "absolute",
                zIndex: 1,
                left: 20,
                top: 12
                }}
            >
                <Icon name='search' size={20} color="#000" />
            </View>
            <TextInput
                style={styles.search}
                placeholder='Search'
            />
        </View>
    )
}

export default SearchInput;