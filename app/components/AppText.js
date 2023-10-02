import React from 'react';
import { Text } from 'react-native';


function AppText({ children, style, ...otherProps }) {
    return(
        <Text style={style} {...otherProps}>
        {children}
        </Text>
    ); 
}


export default AppText;