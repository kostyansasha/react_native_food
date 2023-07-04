import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
                                                      


//cfxUswlGGggMK4DKIst7wA
//API Key    oP-fc5eLI8T34OYQ7AfCS6I_ATk2GV4Ea8l8TfSPLGrMjg77fqrczGNenOk6jsT1nWq4eoCnJbAVcsnd0bbnnRS4gJA_TQp5AyZ3TxKZy93pZ-428xH8VnTop-ujZHYx