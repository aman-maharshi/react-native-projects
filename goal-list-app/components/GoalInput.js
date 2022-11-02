import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    textInput: {
        width: "100%",
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438"
    },
    buttonsRow: {
        flexDirection: "row",
        marginTop: 16
    },
    buttonContainer: {
        width: 100,
        marginHorizontal: 20
    },
    image: {
        height: 200,
        width: 200,
        margin: 10
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
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput value={goal} onChangeText={handleGoalInputChange} style={styles.textInput} placeholder="Your course goal!"></TextInput>
                <View style={styles.buttonsRow}>
                    <View style={styles.buttonContainer}>
                        <Button onPress={addGoal} title="Add Goal" color="#b180f0"></Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={closeModal} title="Cancel" color="#f31282"></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput
