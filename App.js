import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Modal, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [showAddGoalModal, setShowAddGoalModal] = useState(false);
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(inputText) {
        setEnteredGoalText(inputText);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        setEnteredGoalText("");
        closeAddGoalModalHandler();
    }

    function addNewGoalHandler() {
        setShowAddGoalModal(true);
    }

    function closeAddGoalModalHandler() {
        setShowAddGoalModal(false);
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    function renderGoal(goalData) {
        const { index, item: goal } = goalData;
        return (
            <GoalItem
                index={index}
                goal={goal}
                onDeleteItem={deleteGoalHandler}
            />
        );
    }

    function renderGoals() {
        return (
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item, index) => `goalItem-${item.id}`}
                    renderItem={renderGoal}
                />
            </View>
        );
    }

    function renderGoalInput() {
        console.log("goal input")
        return (
            <Modal animationType="slide">
                <GoalInput
                    goalInputHandler={goalInputHandler}
                    enteredGoalText={enteredGoalText}
                    addGoalHandler={addGoalHandler}
                    onCancel={closeAddGoalModalHandler}
                />
            </Modal>
        );
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button title="Add New Goal" onPress={addNewGoalHandler} />
                {showAddGoalModal && renderGoalInput()}
                {renderGoals()}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: "#26064F",
    },
    goalsContainer: {
        flex: 8,
    },
});
