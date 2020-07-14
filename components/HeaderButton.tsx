import React from "react";
import {Platform, StyleSheet, View} from "react-native";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";
import {Colors} from "../constants/Colors";


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface State {

}

export class CustomHeaderButton extends React.Component<Props, State>{
    constructor(props: Props, state: State) {
        super(props, state);

    }

    render() {
        return (
            <HeaderButton
                {...this.props}
                title={'TILE?'}
                IconComponent={Ionicons}
                iconSize={23}
                color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
            />
        );
    }
}

const styles = StyleSheet.create({

});
