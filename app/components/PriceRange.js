import React, { useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PriceRange = () => {

    const [values, setValues] = useState([100, 1000]);

    const multiSliderValuesChange = (values) => {
        setValues(values);
    }

    return (
        <MultiSlider
            values={[values[0], values[1]]}
            sliderLength={280}
            onValuesChange={multiSliderValuesChange}
            min={0}
            max={10}
            step={1}
        />
    )
}

export default PriceRange;