import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 40,
        paddingHorizontal: 20
    },
    textContainer: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center"
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "lightgray",
        padding: 10,
        marginRight: 10
    },
    goalsContainer: {
        borderWidth: 1,
        borderColor: "lightgray"
    },
    singleGoal: {
        padding: 5,
        marginBottom: 5,
        backgroundColor: "lightpink"
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
            <View style={styles.textContainer}>
                <TextInput value={goal} onChange={e => setGoal(e.target.value)} style={styles.textInput} placeholder="Whats on your mind?" />
                <Button onPress={addGoal} title="Add" color="#841584"></Button>
            </View>
            <View style={styles.goalsContainer}>
                {goalList.map(item => {
                    return (
                        <Text key={item} style={styles.singleGoal}>
                            {item}
                        </Text>
                    )
                })}
            </View>
        </View>
    )
}

export default App
