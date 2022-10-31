import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 60,
        paddingHorizontal: 16
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
        // borderWidth: 1,
        // borderColor: "red"
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#cccccc",
        marginRight: 20,
        padding: 10
    }
})

const App = () => {
    const [goal, setGoal] = useState("")
    const [goalList, setGoalList] = useState([])

    const addGoal = () => {
        setGoalList(prevGoals => setGoalList([goal, ...prevGoals]))
        setGoal("")
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!"></TextInput>
                <Button title="Add Goal"></Button>
            </View>
            <View>
                <Text>List of goals</Text>
            </View>
        </View>
    )
}

export default App
