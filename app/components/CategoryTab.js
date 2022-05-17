import * as React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
    <View style={styles.scene}>
        <View style={{margin: 10}}>
            <Image
                source={require('../images/shoe.png')}
            />    
        </View>    
        <View style={{margin: 10}}>
            <Image
                source={require('../images/bag.png')}
            />    
        </View>    
        <View style={{margin: 10}}>
            <Image
                source={require('../images/watch.png')}
            />    
        </View>    
    </View>
);

const SecondRoute = () => (
    <View style={styles.scene}>
        <View style={{margin: 10}}>
            <Image
                source={require('../images/watch.png')}
            />    
        </View>    
    </View>
);

const ThirdRoute = () => (
    <View style={styles.scene}>
        <View style={{margin: 10}}>
            <Image
                source={require('../images/shoe.png')}
            />    
        </View>    
    </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#0037BA' }}
      inactiveColor="#000"
      activeColor='#000'
      style={{ backgroundColor: 'white' }}
    />
);
  

export default function CategoryTab() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Women' },
    { key: 'second', title: 'Men' },
    { key: 'third', title: 'Kids' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  scene: {
    flex: 1,
  },
  categoryTitle: {
      color: '#000',
      textAlign:'center',
      fontSize: 55
  }
});
