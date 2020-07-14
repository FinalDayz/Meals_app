import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import React from "react";
import {MealList} from "../components/MealList";
import {MEALS} from "../data/DummyData";
import {CustomHeaderButton} from "../components/HeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface State {

}

export class FavoritesScreen extends React.Component<Props, State>{
    constructor(props: Props, state: State) {
        super(props, state);

    }

    render() {
        const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
        return <MealList listData={favMeals} navigation={this.props.navigation} />;
    }

    navigationOptions = (navData: any) => {
        return {
            headerTitle: 'Your Favorites',
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
            )
        };
    };

}
