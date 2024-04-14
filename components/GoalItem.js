import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
    const { goal, onDeleteItem } = props;
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: "#9370C2" }}
                onPress={() => onDeleteItem(goal.id)}s
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText} id={goal.id}>
                    {goal.text}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        color: "white",
    },
    goalText: {
        color: "white",
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }
});

export default GoalItem;
