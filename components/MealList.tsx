import React from "react";
import {FlatList, ListRenderItem, StyleSheet, View} from "react-native";
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import {Meal} from "../models/Meal";
import {CATEGORIES} from "../data/DummyData";
import {MealItem} from "./MealItem";
import {Category} from "../models/category";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
    listData: Meal[]
}

interface State {

}

export class MealList extends React.Component<Props, State>{
    constructor(props: Props, state: State) {
        super(props, state);

    }

    renderMealItem(itemData: { index: number, item: Meal }) {

        return (
            <MealItem
                meal={itemData.item}
                onSelectMeal={() => {
                    this.props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    });
                }}
            />
        );
    }

    render() {
        return (
            <View style={styles.list}>
                <FlatList
                    data={this.props.listData}
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderMealItem.bind(this)}
                    style={{ width: '100%' }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});
