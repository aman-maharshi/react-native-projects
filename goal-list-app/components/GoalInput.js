import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal } from "react-native"

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        padding: 16
    },
    textInput: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#cccccc",
        padding: 10
    },
    buttonsRow: {
        flexDirection: "row",
        marginTop: 16
    },
    buttonContainer: {
        width: 100,
        marginHorizontal: 20
    }
})

const GoalInput = ({ handleAddGoal, showModal, closeModal }) => {
    const [goal, setGoal] = useState("")

    const handleGoalInputChange = value => {
        setGoal(value)
    }

    const addGoal = () => {
        handleAddGoal(goal)
        setGoal("")
        closeModal()
    }

    return (
        <Modal visible={showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput value={goal} onChangeText={handleGoalInputChange} style={styles.textInput} placeholder="Your course goal!"></TextInput>
                <View style={styles.buttonsRow}>
                    <View style={styles.buttonContainer}>
                        <Button onPress={addGoal} title="Add Goal" color="#5e0acc"></Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={closeModal} title="Cancel" color="#5e0acc"></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput
