import {Platform} from "react-native";
import {Colors} from "../constants/Colors";

export const DefaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        // fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        // fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
};
