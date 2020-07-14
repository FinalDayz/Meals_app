import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import React from "react";
import {MEALS} from "../data/DummyData";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {ScrollView, StyleSheet, Image, Text, View} from "react-native";
import {Meal} from "../models/Meal";
import {CustomHeaderButton} from "../components/HeaderButton";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>,
}

interface State {

}

export class MealDetailScreen extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);

    }

    render() {
        const mealId = this.props.navigation.getParam('mealId');

        const selectedMeal = MEALS.find(meal => meal.id === mealId);
        if(!selectedMeal)
            return (null);
        return (
            <ScrollView>
                <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
                <View style={styles.details}>
                    <Text>{selectedMeal.duration}m</Text>
                    <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text>{selectedMeal.affordability.toUpperCase()}</Text>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => (
                    <View style={styles.listItem} key={ingredient.toString()}>
                        <Text>{ingredient}</Text>
                    </View>
                ))}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step => (
                    <View style={styles.listItem} key={step.toString()}>
                        <Text>{step}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    }

    static navigationOptions = (navigationData: any) => {
        const mealId = navigationData.navigation.getParam('mealId');
        const selectedMeal = MEALS.find(meal => meal.id === mealId);
        return {
            headerTitle: selectedMeal?.title,
            headerRight: (

                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Favorite"
                        iconName="ios-star"
                        onPress={() => {
                            console.log('Mark as favorite!');
                        }}
                    />
                </HeaderButtons>
            )
        };
    };
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});
