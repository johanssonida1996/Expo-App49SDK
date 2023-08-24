import colors from './colors';
import { StyleSheet, Platform}  from 'react-native';


export default {
container: {
   backgroundColor: colors.primary,
   flex: 1,
 },
 button: {
   borderRadius: 15,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 15,
   width: '100%',
   marginVertical: 10,
   elevation: 8,
   ...(Platform.OS === 'ios' && {
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.9,
      elevation: 8,
      shadowRadius: 4,
      shadowOffset: { width: 1, height: 13 },
    }),
 },
buttonWhiteText:{
   color: colors.dark,
   fontSize: 20,
   fontWeight: 800
},
buttonGreenText:{
   color: colors.white,
   fontSize: 20,
   fontWeight: 800
},
};
