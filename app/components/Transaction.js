import React from 'react';
import { View } from 'react-native';
import Label from './Label';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/style';

const Transaction = ({ iconName, name, description, amount, type }) => {
    return (
        <View
            style={{
                width: 350,
                height: 80,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: '#FFFFFF',
                alignSelf: 'center',
                flexDirection: 'row',
                paddingTop: 15,
                marginBottom: 10,
            }}
        >
            <View>
                <View style={{backgroundColor: '#FFB400', width:40, height:20, marginTop: 5, marginLeft: 17, borderRadius: 10, padding:20}}>
                    <Icon name='phone' color='#000' size={10} />
                </View>
            </View>
            <View style={{marginRight: 100}}>
                <Label labelText='Amazon' labelTextColor='#000' labelSize={20} />
                <Label labelText='Shopping' labelTextColor='#000' labelSize={12} />
            </View>
            <View>
                <Label labelText='-N150' labelTextColor='#F00' labelSize={18} />
            </View>
        </View>
    )
}

export default Transaction;