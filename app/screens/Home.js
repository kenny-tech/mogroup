import React from 'react';

import { View, Text, Image, ScrollView } from 'react-native';
import styles from '../styles/style';
import Rate from '../components/Rate';
import ImageSlider from '../components/ImageSlider';
import SearchInput from '../components/SearhInput';

const Home = () => {

    return (
        <View style={{flex: 1, alignItems:'flex-start', backgroundColor:'#FFF'}}>
            <View style={{backgroundColor: '#0037BA', width: '100%', height: 60, borderColor: '#0037BA'}}>
                <SearchInput />
            </View>
           <Text style={styles.cardText}>Today's deal</Text> 
            <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                <ImageSlider />
            </View>
            <Text style={styles.cardText}>Best Sellers</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                <View style={{flexDirection: 'row'}}> 
                    <View>
                        <View style={{marginLeft: 17}}>
                            <Image
                                source={require('../images/vintage.png')}
                            />    
                        </View>  
                    <View>
                        <View>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Vintage Bra & Pant</Text>
                        </View>  
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>$100</Text>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#0037BA'}}>$121.86</Text>
                        </View>
                        <View style={{marginLeft:17, alignSelf: 'flex-start'}}>
                            <Rate />
                        </View>
                    </View>
                </View>
                    <View>
                        <View style={{marginLeft: 17}}>
                            <Image
                                source={require('../images/adidas.png')}
                            />    
                        </View>  
                        <View>
                            <View>
                                <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Vintage Bra & Pant</Text>
                            </View>  
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>$100</Text>
                                <Text style={{marginLeft:17, fontSize: 12,  color: '#0037BA'}}>$121.86</Text>
                            </View>
                            <View style={{marginLeft:17, alignSelf: 'flex-start'}}>
                                <Rate />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}> 
                    <View>
                        <View style={{marginLeft: 17}}>
                            <Image
                                source={require('../images/vintage.png')}
                            />    
                        </View>  
                    <View>
                        <View>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Vintage Bra & Pant</Text>
                        </View>  
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>$100</Text>
                            <Text style={{marginLeft:17, fontSize: 12,  color: '#0037BA'}}>$121.86</Text>
                        </View>
                        <View style={{marginLeft:17, alignSelf: 'flex-start'}}>
                            <Rate />
                        </View>
                    </View>
                </View>
                    <View>
                        <View style={{marginLeft: 17}}>
                            <Image
                                source={require('../images/adidas.png')}
                            />    
                        </View>  
                        <View>
                            <View>
                                <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Vintage Bra & Pant</Text>
                            </View>  
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>$100</Text>
                                <Text style={{marginLeft:17, fontSize: 12,  color: '#0037BA'}}>$121.86</Text>
                            </View>
                            <View style={{marginLeft:17, alignSelf: 'flex-start'}}>
                                <Rate />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>            
        </View>
    )
}

export default Home;