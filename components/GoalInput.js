import React from "react";
import { TextInput, View, Button, StyleSheet, Image } from "react-native";

const GoalInput = (props) => {
    const { goalInputHandler, enteredGoalText, addGoalHandler, onCancel } =
        props;
    return (
        <View style={styles.inputContainer}>
            <Image
                style={styles.image}
                source={require("../assets/images/goal.png")}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Your Course Goal!"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add Goal" onPress={addGoalHandler} />
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={onCancel} color="#B04545" />
                </View>
            </View>
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#7BC2E8",
        backgroundColor: "#7BC2E8",
        color: "#29063D",
        borderRadius: 6,
        width: "100%",
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});
