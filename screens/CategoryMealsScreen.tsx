import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import React from "react";
import {CATEGORIES, MEALS} from "../data/DummyData";
import {MealList} from "../components/MealList";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface State {

}

export class CategoryMealsScreen extends React.Component<Props, State>{
    constructor(props: Props, state: State) {
        super(props, state);


    }

    render() {
        const catId = this.props.navigation.getParam('categoryId');

        const displayedMeals = MEALS.filter(
            meal => meal.categoryIds.indexOf(catId) >= 0
        );

        console.log(displayedMeals);

        return (
            <MealList listData={displayedMeals} navigation={this.props.navigation} />
        );
    }

    static navigationOptions = (navData:any) => {
        const catId = navData.navigation.getParam('categoryId');
        const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
        return {
            headerTitle: selectedCategory?.title
        };
    }

}

