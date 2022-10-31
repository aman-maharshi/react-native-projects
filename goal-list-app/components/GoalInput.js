import { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#cccccc"
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#cccccc",
        marginRight: 20,
        padding: 10
    }
})

const GoalInput = ({ handleAddGoal }) => {
    const [goal, setGoal] = useState("")

    const handleGoalInputChange = value => {
        setGoal(value)
    }

    const addGoal = () => {
        handleAddGoal(goal)
        setGoal("")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput value={goal} onChangeText={handleGoalInputChange} style={styles.textInput} placeholder="Your course goal!"></TextInput>
            <Button onPress={addGoal} title="Add Goal"></Button>
        </View>
    )
}

export default GoalInput
