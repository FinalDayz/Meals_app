import {createAppContainer, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import {Platform, Text} from "react-native";
import {Colors} from "../constants/Colors";
import {FiltersNavigator} from "./FiltersNavigator";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {FavNavigator} from "./FavNavigator";
import {MealsNavigator} from "./MealsNavigator";


const tabsNavigator = createBottomTabNavigator(
    {
        Meals: {
            screen: MealsNavigator,
            navigationOptions: {
                tabBarIcon: (info: any) => {
                    return (
                        <Ionicons name="ios-restaurant" size={25} color={info.tintColor} />
                    );
                },
                tabBarColor: Colors.primaryColor,
                tabBarLabel:
                    Platform.OS === 'android' ? (
                        <Text style={{/* fontFamily: 'open-sans-bold'*/ }}>Meals</Text>
                    ) : (
                        'Meals'
                    )
            }
        },
        Favorites: {
            screen: FavNavigator,
            navigationOptions: {
                tabBarIcon: (info: any) => {
                    return <Ionicons name="ios-star" size={25} color={info.tintColor} />;
                },
                tabBarColor: Colors.accentColor,
                tabBarLabel:
                    Platform.OS === 'android' ? (
                        <Text style={{ /*fontFamily: 'open-sans-bold' */}}>Favorites</Text>
                    ) : (
                        'Favorites'
                    )
            }
        }
}, {
    tabBarOptions: {
        labelStyle: {
            // fontFamily: 'open-sans'
        },
        activeTintColor: Colors.accentColor
    }
});

const MainNavigator = createDrawerNavigator(
    {
        tabsNavigator: {
            screen: tabsNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: FiltersNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.accentColor,
            labelStyle: {
                // fontFamily: 'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(MainNavigator);
