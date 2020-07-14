import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import React, {useState} from "react";
import {Colors} from "../constants/Colors";
import {Platform, Switch, View, Text, StyleSheet} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {CustomHeaderButton} from "../components/HeaderButton";

interface FiltersScreenProps {
    label: string;
    state: boolean;
    onChange: (value: boolean) => void;
}


class FilterSwitch extends React.Component<FiltersScreenProps, any>{
    render() {
        return (
            <View style={styles.filterContainer}>
                <Text>{this.props.label}</Text>
                <Switch
                    trackColor={{true: Colors.primaryColor, false: 'white'}}
                    thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                    value={this.props.state}
                    onValueChange={this.props.onChange}
                />
            </View>
        );
    }
}

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface State {
    isGlutenFree: boolean;
    isLactoseFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
}

export class FiltersScreen extends React.Component<Props, State>{



    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            ...state,
            isGlutenFree: false,
            isLactoseFree: false,
            isVegan: false,
            isVegetarian: false,
        };


    }

    render() {
        // const saveFilters = React.useCallback(() => {
        //     const appliedFilters = {
        //         glutenFree: this.state.isGlutenFree,
        //         lactoseFree: this.state.isLactoseFree,
        //         vegan: this.state.isVegan,
        //         isVegetarian: this.state.isVegetarian
        //     };
        //
        //     console.log(appliedFilters);
        // }, [this.state.isGlutenFree, this.state.isLactoseFree, this.state.isVegan, this.state.isVegetarian]);
        //
        // React.useEffect(() => {
        //     this.props.navigation.setParams({
        //         save: this.state
        //     });
        // }, [saveFilters]);

        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Available Filters / Restrictions</Text>
                <FilterSwitch
                    label="Gluten-free"
                    state={this.state.isGlutenFree}
                    onChange={newValue => this.setState({isGlutenFree: newValue})}
                />
                <FilterSwitch
                    label="Lactose-free"
                    state={this.state.isLactoseFree}
                    onChange={newValue => this.setState({isLactoseFree: newValue})}
                />
                <FilterSwitch
                    label="Vegan"
                    state={this.state.isVegan}
                    onChange={newValue => this.setState({isVegan: newValue})}
                />
                <FilterSwitch
                    label="Vegetarian"
                    state={this.state.isVegetarian}
                    onChange={newValue => this.setState({isVegetarian: newValue})}
                />
            </View>
        );
    }

    static navigationOptions = (navData: any) => {
        return {
            headerTitle: 'Filter Meals',
            headerLeft: (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Menu"
                        iconName="ios-menu"
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }}
                    />
                </HeaderButtons>
            ),
            headerRight: (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Save"
                        iconName="ios-save"
                        onPress={navData.navigation.getParam('save')}
                    />
                </HeaderButtons>
            )
        };
    };

}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});
