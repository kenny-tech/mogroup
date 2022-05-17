import React, { useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { View } from 'react-native';

const ImageSlider = () => {

    const [images, setImages] = useState([
        require('../images/slide1.jpg'),     
        require('../images/adidas.png'),        
        require('../images/bag.png'),           
    ]);
    const [width, setWidth] = useState('');

    return (
        <View style={{ marginHorizontal: 15 }}>
              <SliderBox
                images={images}
                sliderBoxHeight={200}
                onCurrentImagePressed={(index) =>
                  console.log(`image ${index} pressed`)
                }
              //  onCurrentImagePressed={index =>   console.warn(`image ${index} pressed`)}
            //  currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                sliderBoxHeight={200}
                dotColor="#0037BA"
                inactiveDotColor="#90A4AE"
                 dotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                    marginHorizontal: 10,
                    padding: 0,
                    margin: 0
                 }}
                  paginationBoxStyle={{
                   position: "absolute",
                   bottom: 0,
                   padding: 0,
                   alignItems: "center",
                   alignSelf: "center",
                   justifyContent: "center",
                   paddingVertical: 10
                }}
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                ImageComponentStyle={{borderRadius: 15,   width: '97%', marginTop: 5}}
                imageLoadingColor="#2196F3"
                parentWidth={width}
              />
        </View>
    )
}

export default ImageSlider;