import React from 'react';

import { View, ScrollView } from 'react-native';
import Label from '../components/Label';

const Investment = () => {

    return (
        <ScrollView>
            <View style={{flex: 1}}>
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
                            
                        </View>
                        <View style={{marginRight: 70}}>
                            <Label labelText='1 Plot of Land' labelTextColor='#000' labelSize={20} />
                            <Label labelText={'1 Plot of Land at Agege'} labelTextColor='#000' labelSize={12} />
                        </View>
                        <View>
                            <Label labelText={'N1,000,000'} labelTextColor={'#F00'} labelSize={18} />
                        </View>
                </View>   
                
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
                            
                        </View>
                        <View style={{marginRight: 70}}>
                            <Label labelText='1 Plot of Land' labelTextColor='#000' labelSize={20} />
                            <Label labelText={'1 Plot of Land at Yaba'} labelTextColor='#000' labelSize={12} />
                        </View>
                        <View>
                            <Label labelText={'N1,000,000'} labelTextColor={'#F00'} labelSize={18} />
                        </View>
                </View>   

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
                            
                        </View>
                        <View style={{marginRight: 70}}>
                            <Label labelText='1 Plot of Land' labelTextColor='#000' labelSize={20} />
                            <Label labelText={'1 Plot of Land at Ikeja'} labelTextColor='#000' labelSize={12} />
                        </View>
                        <View>
                            <Label labelText={'N1,000,000'} labelTextColor={'#F00'} labelSize={18} />
                        </View>
                </View>   

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
                            
                        </View>
                        <View style={{marginRight: 70}}>
                            <Label labelText='1 Plot of Land' labelTextColor='#000' labelSize={20} />
                            <Label labelText={'1 Plot of Land at Surulere'} labelTextColor='#000' labelSize={12} />
                        </View>
                        <View>
                            <Label labelText={'N1,000,000'} labelTextColor={'#F00'} labelSize={18} />
                        </View>
                </View>   

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
                            
                        </View>
                        <View style={{marginRight: 70}}>
                            <Label labelText='1 Plot of Land' labelTextColor='#000' labelSize={20} />
                            <Label labelText={'1 Plot of Land at Agege'} labelTextColor='#000' labelSize={12} />
                        </View>
                        <View>
                            <Label labelText={'N1,000,000'} labelTextColor={'#F00'} labelSize={18} />
                        </View>
                </View>   
                        
            </View>
        </ScrollView>
       
    )
}

export default Investment;