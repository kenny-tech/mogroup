import React from 'react';

import { View, ScrollView } from 'react-native';
import Transaction from '../components/Transaction';

const Savings = () => {

    return (
        <ScrollView>
            <View style={{flex: 1}}>
                <Transaction iconName='phone' name='Amazon' description='Shopping' amount='150'  type='debit' />    
                <Transaction iconName='phone' name='Amazon' description='Shopping' amount='150'  type='debit' />       
                <Transaction iconName='phone' name='Amazon' description='Shopping' amount='150'  type='debit' />       
                <Transaction iconName='phone' name='Amazon' description='Shopping' amount='150'  type='debit' />       
                <Transaction iconName='phone' name='Amazon' description='Shopping' amount='150'  type='debit' />       
            </View>
        </ScrollView>
       
    )
}

export default Savings;