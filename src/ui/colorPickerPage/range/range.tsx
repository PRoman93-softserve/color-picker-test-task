import React, {ChangeEvent} from "react";
import RangeSlider from 'react-bootstrap-range-slider';

type PropType = {
    value: number,
    onHandlerChange: (e: number) => void
}

const Range = (props: PropType) => {

    return (
        <RangeSlider
            max={255}
            value={props.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => props.onHandlerChange(+e.currentTarget.value)}
        />
    );

};
export default Range