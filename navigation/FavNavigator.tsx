import {createStackNavigator} from "react-navigation";
import {MealDetailScreen} from "../screens/MealDetailScreen";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {DefaultStackNavOptions} from "./DefaultOptions";

export const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: DefaultStackNavOptions
    }
);
