import React from 'react'
import Svg, { Line } from 'react-native-svg'

export const AddIcon = () => {
    return (
        <Svg width="35" height="35" viewBox="0 0 100 100" fill="none" >
            <Line x1="50.5" y1="2.5" x2="50.5" y2="97.5" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
            <Line x1="2.5" y1="47.5" x2="97.5" y2="47.5" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        </Svg>
    )
}
