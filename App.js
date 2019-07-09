import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator,createAppContainer } from 'react-navigation';

import Main from './screens/Main';
import Push from './screens/Push';
import Modal  from  './screens/Modal';


const MainNavigation = createStackNavigator({
  Main: {screen:Main},
  Push: {screen:Push},
},
{
  initialRouteName:'Main', mode:'card',headerMode:'none'
})

const NestNavigation=createStackNavigator(
  {
    MainNavigation:{screen:MainNavigation},
    Modal:{screen:Modal},
  },
  {initialRouteName:'MainNavigation',mode:'modal',headerMode:'none'},
)


const NestContainer=createAppContainer(NestNavigation);


export default class App extends React.Component{
  render(){
    return(
      <NestContainer/>
    );
  }
}
