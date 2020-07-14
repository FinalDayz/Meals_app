import {createStackNavigator} from "react-navigation";
import {CategoriesScreen} from "../screens/CategoriesScreen";
import {MealDetailScreen} from "../screens/MealDetailScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import React from "react";
import {CustomHeaderButton} from "../components/HeaderButton";
import {DefaultStackNavOptions} from "./DefaultOptions";
import {CategoryMealsScreen} from "../screens/CategoryMealsScreen";

export const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: (navData:any) => {
                return {
                    headerTitle: 'Meal Categories',
                    headerLeft:  (
                        <HeaderButtons
                            HeaderButtonComponent={CustomHeaderButton}>
                            <Item
                                title="Menu"
                                iconName="ios-menu"
                                onPress={() => {
                                    navData.navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    )
                }
            }
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: DefaultStackNavOptions
    }
);
