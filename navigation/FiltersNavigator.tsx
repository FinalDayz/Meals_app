import {createStackNavigator} from "react-navigation";
import {FiltersScreen} from "../screens/FiltersScreen";
import {DefaultStackNavOptions} from "./DefaultOptions";

export const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        defaultNavigationOptions: DefaultStackNavOptions
    }
);
