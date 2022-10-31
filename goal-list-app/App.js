import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 60,
        paddingHorizontal: 16,
        flex: 1
    },
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
    },
    goalsContainer: {
        flex: 5
    },
    goalItem: {
        padding: 10,
        marginBottom: 14,
        borderRadius: 6,
        backgroundColor: "#5e0acc"
    },
    goalText: {
        color: "white"
    }
})

const App = () => {
    const [goal, setGoal] = useState("")
    const [goalList, setGoalList] = useState([])

    const handleGoalInputChange = value => {
        setGoal(value)
    }

    const handleAddGoal = () => {
        setGoalList(prevGoalList => [...prevGoalList, goal])
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={handleGoalInputChange} style={styles.textInput} placeholder="Your course goal!"></TextInput>
                <Button onPress={handleAddGoal} title="Add Goal"></Button>
            </View>
            <View style={styles.goalsContainer}>
                {goalList.map(item => (
                    <View key={item} style={styles.goalItem}>
                        <Text style={styles.goalText}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default App
