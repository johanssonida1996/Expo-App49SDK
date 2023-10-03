import colors from './colors';
import { Platform }  from 'react-native';


export default {
   colors,
   text: {
       color: colors.black,
       fontSize: 18,
       fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
   }
}



