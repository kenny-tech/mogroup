import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../styles/style';

const RealEstate = () => {

    return (
        <ScrollView>
            <View style={{alignItems: 'center'}}> 
                    <View>
                        <View style={{marginHorizontal: 15}}>
                            <Image
                                source={require('../images/watch.png')}
                            />   
                        </View>  
                    <View>
                        <View style={styles.realEstateCardText}>
                            <Text style={{marginHorizontal:15, fontSize: 12,  color: '#000', alignSelf: 'center', fontSize: 24}}>Ikeja</Text>
                        </View>  
                    </View>
                </View>
            </View>

            <View style={{alignItems: 'center'}}> 
                    <View>
                        <View style={{marginHorizontal: 15}}>
                            <Image
                                source={require('../images/watch.png')}
                            />   
                        </View>  
                    <View>
                        <View style={styles.realEstateCardText}>
                            <Text style={{marginHorizontal:15, fontSize: 12,  color: '#000', alignSelf: 'center', fontSize: 24}}>Yaba</Text>
                        </View>  
                    </View>
                </View>
            </View>

            <View style={{alignItems: 'center'}}> 
                    <View>
                        <View style={{marginHorizontal: 15}}>
                            <Image
                                source={require('../images/watch.png')}
                            />   
                        </View>  
                    <View>
                        <View style={styles.realEstateCardText}>
                            <Text style={{marginHorizontal:15, fontSize: 12,  color: '#000', alignSelf: 'center', fontSize: 24}}>Surulere</Text>
                        </View>  
                    </View>
                </View>
            </View>

            <View style={{alignItems: 'center'}}> 
                    <View>
                        <View style={{marginHorizontal: 15}}>
                            <Image
                                source={require('../images/watch.png')}
                            />   
                        </View>  
                    <View>
                        <View style={styles.realEstateCardText}>
                            <Text style={{marginHorizontal:15, fontSize: 12,  color: '#000', alignSelf: 'center', fontSize: 24}}>Lekki</Text>
                        </View>  
                    </View>
                </View>
            </View>

            <View style={{alignItems: 'center'}}> 
                    <View>
                        <View style={{marginHorizontal: 15}}>
                            <Image
                                source={require('../images/watch.png')}
                            />   
                        </View>  
                    <View>
                        <View style={styles.realEstateCardText}>
                            <Text style={{marginHorizontal:15, fontSize: 12,  color: '#000', alignSelf: 'center', fontSize: 24}}>Agege</Text>
                        </View>  
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default RealEstate;