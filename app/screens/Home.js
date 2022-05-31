import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";

import { View, Text, ScrollView, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import IconButton from '../components/IconButton';
import Summary from '../components/Summary';
import Label from '../components/Label';
import Transaction from '../components/Transaction';
import SavingGoals from '../components/SavingGoals';
import styles from '../styles/style';

const Home = ({ navigation }) => { useEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
            <Icon name="bell" size={30} style={{ marginRight: 30, color: '#fff' }}/>
            <View style={{  marginRight: 30 }}>
                <Image
                    source={require('../images/adidas.png')}
                    style={{width: 25, height: 30, borderRadius: 10}}
                />   
            </View> 
        </View>
      ),
    });
    }, [navigation]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [amount, setAmount] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <View style={{alignItems:'flex-start', backgroundColor:'#0037BA'}}>
                    <View
                        style={{
                            width: 350,
                            height: 120,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            backgroundColor: '#FFFFFF',
                            alignSelf: 'center',
                            marginTop: 5
                        }}
                    >
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginRight: 85}}>
                                <Text style={{paddingHorizontal: 15, paddingTop: 15, fontSize: 14, color: '#000'}}>Total Investment</Text>
                                <Text style={{paddingLeft: 15, paddingRight: 15, fontSize: 30, fontWeight: 'bold', color: '#000'}}>N2,562.50</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => toggleModal()}>
                                    <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#EDEDF5' iconName='plus' onPress={() => toggleModal()} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#D3D3D3',
                                borderBottomWidth: 1,
                                width: 310,
                                alignSelf: 'center'
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: 350,
                        height: 120,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        backgroundColor: '#FFFFFF',
                        alignSelf: 'center'
                    }}
                >
                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                        <TouchableOpacity onPress={() => toggleModal()}>
                            <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#FF396F' iconColor='#FFFFFF' iconName='money' label="Savings" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleModal()}>
                            <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#6236FF' iconColor='#FFFFFF' iconName='building' label="Investment"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleModal()}>
                            <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#1DCC70' iconColor='#FFFFFF' iconName='credit-card' label="Loan"/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleModal()}>
                            <IconButton buttonWidth={50} buttonHeight={50} buttonBgColor='#FFB400' iconColor='#FFFFFF' iconName='building' label="Real Estate"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginHorizontal: 17}}>
                    <View style={{marginTop: 15, marginHorizontal: 8, flexDirection: 'row'}}>
                        <Summary label='Income' amount='N 552.95' amountColor='#1DCC70' />
                        <Summary label='Total Loan' amount='N 86.45' amountColor='#FF396F' />
                    </View>
                    <View style={{marginTop: 15, marginHorizontal: 8, flexDirection: 'row'}}>
                        <Summary label='Total Savings' amount='N 552.95' amountColor='#000' />
                        <Summary label='Total Expense' amount='N 86.45' amountColor='#000' />
                    </View>
                </View>
                <View style={{marginTop: 15, marginHorizontal: 20, flexDirection: 'row'}}>
                    <View style={{marginRight: 130, marginBottom: 10}}>
                        <Label labelText='Transactions' labelTextColor='#000' labelSize={20} />
                    </View>
                    <View>
                        <Label labelText='View All' labelTextColor='#6236FF' labelSize={12} />
                    </View>
                </View>     
                <View>
                    <Transaction iconName='phone' name='Amazon' description='Shopping' amount='150'  type='debit' />       
                    <Transaction iconName='phone' name='Apple   ' description='Shopping' amount='-120'  type='debit' />       
                </View>

                <View style={{marginTop: 15, marginHorizontal: 20, flexDirection: 'row'}}>
                    <View style={{marginRight: 130, marginBottom: 10}}>
                        <Label labelText='Saving Goals' labelTextColor='#000' labelSize={20} />
                    </View>
                    <View>
                        <Label labelText='View All' labelTextColor='#6236FF' labelSize={12} />
                    </View>
                </View>     
                <View>
                    <SavingGoals name='Gaming Console' description='Gaming' amount='499' percentageDone={85} />   
                    <SavingGoals name='New House' description='Living' amount='100,000' percentageDone={55}/>       
                    <SavingGoals name='Sport Car    ' description='Lifestyle' amount='42,500' percentageDone={15} />  
                </View>
                
                <View style={{marginTop: 17, marginHorizontal: 20, flexDirection: 'row'}}>
                    <View style={{marginRight: 130, marginBottom: 10}}>
                        <Label labelText='Latest News' labelTextColor='#000' labelSize={20} />
                    </View>
                    <View>
                        <Label labelText='View All' labelTextColor='#6236FF' labelSize={12} />
                    </View>
                </View>  
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                    <View style={{flexDirection: 'row', marginLeft: 17}}> 
                            <View>
                                <View style={{marginLeft: 17}}>
                                    <Image
                                        source={require('../images/adidas.png')}
                                    />   
                                </View>  
                            <View>
                                <View style={styles.cardTextView}>
                                    <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Rules you need to know</Text>
                                </View>  
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}> 
                            <View>
                                <View style={{marginLeft: 17}}>
                                    <Image
                                        source={require('../images/adidas.png')}
                                    />   
                                </View>  
                            <View>
                                <View style={styles.cardTextView}>
                                    <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Rules you need to know. These are the rules.</Text>
                                </View>  
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}> 
                            <View>
                                <View style={{marginLeft: 17}}>
                                    <Image
                                        source={require('../images/adidas.png')}
                                    />   
                                </View>  
                            <View>
                                <View style={styles.cardTextView}>
                                    <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Rules you need to know</Text>
                                </View>  
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}> 
                            <View>
                                <View style={{marginLeft: 17}}>
                                    <Image
                                        source={require('../images/adidas.png')}
                                    />   
                                </View>  
                            <View>
                                <View style={styles.cardTextView}>
                                    <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Rules you need to know</Text>
                                </View>  
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}> 
                            <View>
                                <View style={{marginLeft: 17}}>
                                    <Image
                                        source={require('../images/adidas.png')}
                                    />   
                                </View>  
                            <View>
                                <View style={styles.cardTextView}>
                                    <Text style={{marginLeft:17, fontSize: 12,  color: '#000'}}>Rules you need to know</Text>
                                </View>  
                            </View>
                        </View>
                    </View>
                </ScrollView>   
            </ScrollView>
            {/* <Button title="Show modal" onPress={() => toggleModal()} /> */}

            <View>
                <Modal 
                    isVisible={isModalVisible} 
                    hasBackdrop={true} 
                    onBackdropPress={() => setModalVisible(false)} 
                    avoidKeyboard={true}
                    swipeDirection='down' 
                    style={{ justifyContent: 'flex-end' }}
                >
                    <View style={{backgroundColor: '#fff', margin: 10, padding: 10, width: 500, alignSelf: 'center'}}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{color: '#000', fontSize: 24, marginVertical: 10}}>ADD BALANCE</Text>
                            <TextInput
                                value={amount}
                                onChangeText={(amount) => setAmount({ amount })}
                                placeholder={'Enter Amount'}
                                style={styles.input}
                            />
                            <View style={{width: 300, height: 50, borderRadius: 10, backgroundColor: '#0037BA', alignItems: 'center'}}>
                                <Text style={{color: '#fff', fontSize: 24, paddingTop: 10}}>Submit</Text>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View> 
    )

}


export default Home;