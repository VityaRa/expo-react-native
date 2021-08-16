import React from 'react'
import Svg, { Line, Path } from 'react-native-svg'

export const DoneIcon = ({ color = '#ffffff' }) => {
    return (
        <Svg width="30" height="30" viewBox="0 0 50 96" fill="none">
            <Line x1="3.45568" y1="51.7472" x2="29.7472" y2="92.5443" stroke={color} strokeWidth="10" strokeLinecap="round" />
            <Path d="M30 92L72.1909 4.0324" stroke={color} strokeWidth="10" strokeLinecap="round" />
        </Svg>
    )
}
