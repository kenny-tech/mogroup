import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Line from '../components/Line';
import Checkbox from '../components/Checkbox';
import Rate from '../components/Rate';
import styles from '../styles/style';

const Wishlist = () => {

    const [values, setValues] = useState([10, 1000]);

    const multiSliderValuesChange = (values) => {
        setValues(values);
    }

    return (
        <View style={{flex: 1, alignItems:'flex-start', backgroundColor:'#FFF'}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: '#000', marginLeft: 33, marginTop: 10, marginRight: 200}}>Filters</Text>
                <Text style={{fontSize: 20, color: '#000', marginTop: 10, marginHorizontal: 20}}>Reset</Text>
            </View>
            <Line />
            <View>
                <Text style={styles.wishlistTitle}>Size</Text>
                <View style={{marginLeft: 50}}>
                    <Checkbox label="X Small"/>
                    <Checkbox label="Small"/>
                    <Checkbox label="Medium"/>
                    <Checkbox label="Large"/>
                    <Checkbox label="X Large"/>
                </View>
            </View>
            <View>
                <Text style={styles.wishlistTitle}>Price</Text>
                <View style={{marginLeft: 33}}>
                    <MultiSlider
                        values={[values[0], values[1]]}
                        sliderLength={280}
                        onValuesChange={multiSliderValuesChange}
                        min={0}
                        max={1000}
                        step={100}                       
                    />
                </View>
                <View>
                    <View style={{flexDirection:'row', marginBottom: 10}}>
                        <View style={{marginLeft: 80, marginRight: -30}}>
                            <Text style={{color: '#000', fontSize: 20, fontWeight: '300'}}>From</Text>
                        </View>
                        <View style={{marginLeft: 80, flexDirection:'row'}}>
                            <View style={{borderColor: '#808080', width: 60, height: 30, borderWidth: 1}}><Text style={{color: '#000', fontSize: 20, fontWeight: '300', alignSelf: 'center'}}>${values[0]}</Text></View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginLeft: 80, marginRight: -5}}>
                            <Text style={{color: '#000', fontSize: 20, fontWeight: '300'}}>To</Text>
                        </View>
                        <View style={{marginLeft: 80, flexDirection:'row'}}>
                            <View style={{borderColor: '#808080', width: 60, height: 30, borderWidth: 1}}><Text style={{color: '#000', fontSize: 20, fontWeight: '300', alignSelf: 'center'}}>${values[1]}</Text></View>
                        </View>
                    </View>
                </View>
            </View>  

            <View>
                <Text style={styles.wishlistTitle}>Color</Text>
                <View style={{marginLeft: 80}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: '#ABAC62', width: 14, height: 14, marginRight: 10, marginTop: 4}}/>
                        <Text style={{color: '#000', fontSize: 16, fontWeight: '300'}}>Gold</Text>
                    </View>
                </View>
            </View>      
            <View>
                <Text style={styles.wishlistTitle}>Product Rating</Text>
                <View style={{marginLeft: 80, alignSelf: 'flex-start'}}>
                    <Rate />
                </View>
            </View>      
        </View>
    )
}

export default Wishlist;