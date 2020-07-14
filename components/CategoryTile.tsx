import React from "react";
import {Category} from "../models/category";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

interface Props {
    category: Category,
    onclick: () => void,
}

interface State {

}

export class CategoryTile extends React.Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);

    }

    render() {
        return (
            <TouchableOpacity
                style={styles.wrapper}
                              onPress={this.props.onclick}>
                <View
                    style={[styles.wrapper, styles.innerWrapper,
                        {backgroundColor: this.props.category.color}]}>
                    <Text style={styles.tileText}>{this.props.category.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    tileText: {
        fontSize: 25,
        textAlign: 'right',
        padding: 10,
    },
    innerWrapper: {
        margin: 0,
    },
    wrapper: {
        flex: 1,
        borderRadius: 20,
        aspectRatio: 1,
        margin: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 150,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
    }
});
