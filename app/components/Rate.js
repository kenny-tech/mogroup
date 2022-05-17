import React from 'react';
import { Rating } from 'react-native-ratings';

const Rate = () => {

    return (
        <Rating
            type='star'
            ratingCount={5}
            imageSize={15}
        />
    )
}

export default Rate;