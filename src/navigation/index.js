import React from 'react';
import {  Image, Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch,  } from 'react-redux';
//--------- icon
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

/* ===========================
          screen
==============================*/
import SplashScreen from '../screen/SplashScreen';

//--- Tab
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import CityExport from '../screen/CityExport';
import Saved from '../screen/Saved';
import Investor from '../screen/Investor';
//--- Screen

import {  COLOR, THEME } from '../Utils/Theme';

//----------
//---
const Navigation = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const dispatch = useDispatch();
    
    const thmColor = THEME.ThemeColor;

  
    function BottomTab() {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={() => ({
                    tabBarStyle: { minHeight: 25, backgroundColor: COLOR.White1 },
                    tabBarLabelStyle: { paddingBottom: 5 },
                    tabBarActiveTintColor: COLOR.primarytext,
                    tabBarInactiveTintColor: COLOR.dark1,

                   

                    tabBarHideOnKeyboard: true,
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home",
                        animationEnabled: false,
                        title: '',
                        tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={size} color={color} />),
                    }}
                />
                <Tab.Screen
                    name="CityExport"
                    component={CityExport}
                    options={{
                        tabBarLabel: "CityExport",
                        animationEnabled: false,
                        title: '',
                        tabBarIcon: ({ color, size }) => (<Feather name="users" size={size} color={color} />),
                    }}
                />
                <Tab.Screen
                    name="Saved"
                    component={Saved}
                    options={{
                        tabBarLabel: "Saved",
                        title: '',
                        animationEnabled: false,
                        tabBarIcon: ({ color, size }) => (<AntDesign name="hearto" size={size} color={color} />),
                    }}
                />
                <Tab.Screen
                    name="Investor"
                    component={Investor}
                    options={{
                        tabBarLabel: "Investor",
                        title: '',
                        animationEnabled: false,
                        tabBarIcon: ({ color, size }) => (<Feather name="shopping-bag" size={size} color={color} />),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: "Profile",
                        title: '',
                        animationEnabled: false,
                        tabBarIcon: ({ color, size }) => (<FontAwesome name="user" size={size} color={color} />),
                    }}
                />
            </Tab.Navigator>
        );
    }
    return (
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName="mainTab"
                screenOptions={({ navigation }) => ({
                    headerTintColor: COLOR.White1,
                    headerStyle: { backgroundColor: COLOR.theme1 },
                    headerTitleAlign: "center",
                    headerTitleStyle: { fontWeight: 'bold' },
                    animation: 'none',
                    headerBackTitleVisible: false,
                    animationEnabled: false,
                    headerLeft: (props) => {
                        if (props.canGoBack) {
                            return <Entypo name="chevron-left" size={26} color={props.tintColor} onPress={() => navigation.goBack()} />
                        }
                    },
                })}
            >
                {/*==========  screen  ==========*/}
                <Stack.Group>
                    <Stack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                    
                </Stack.Group>
                {/* ======================  other screen ====*/}
                <Stack.Group>
                    <Stack.Screen
                        name="mainTab"
                        component={BottomTab}
                        options={{ header: () => null, gestureEnabled: false }}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation
