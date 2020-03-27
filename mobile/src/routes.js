import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Caso from './pages/Cases';
import Detail from './pages/Detail'; 

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Casos" component={Caso}/>
                <AppStack.Screen name="Detalhes" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}