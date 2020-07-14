import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";
import React from "react";
import {FlatList} from "react-native";
import {CATEGORIES} from "../data/DummyData";
import {Category} from "../models/category";
import {CategoryTile} from "../components/CategoryTile";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface State {

}

export class CategoriesScreen extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);
    }

    clickedTile(categoryId: string) {
        this.props.navigation.navigate('CategoryMeals',
            {
                categoryId: categoryId
            }
        );
    }

    renderGridTile(itemData: { index: number, item: Category }) {
        return (

            <CategoryTile
                category={itemData.item}
                onclick={() => {
                    this.clickedTile(itemData.item.id)
                }}/>
        );
    }

    render() {
        return (
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={this.renderGridTile.bind(this)}
                numColumns={2}
            />
        );
    }
}


