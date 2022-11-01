import { useState } from "react"
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native"
import GoalInput from "./components/GoalInput"

// COMPONENTS
import GoalItem from "./components/GoalItem"

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 60,
        paddingHorizontal: 16,
        flex: 1
    },
    goalsContainer: {
        flex: 5
    },
    noGoalsText: {
        color: "#34495e"
    }
})

const App = () => {
    const [goalList, setGoalList] = useState([])

    const handleAddGoal = goalValue => {
        if (goalValue) {
            setGoalList(prevGoalList => [
                ...prevGoalList,
                {
                    text: goalValue,
                    id: Math.random().toString()
                }
            ])
        }
    }

    const handleDeleteGoal = id => {
        setGoalList(currentGoalList => {
            return currentGoalList.filter(item => item.id !== id)
        })
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput handleAddGoal={handleAddGoal} />
            <View style={styles.goalsContainer}>
                {goalList.length === 0 && <Text style={styles.noGoalsText}>No goals added yet!</Text>}
                {/* <FlatList
                    data={goalList}
                    renderItem={itemData => {
                        return (
                            <View key={itemData.index} style={styles.goalItem}>
                                <Text style={styles.goalText}>{itemData.item}</Text>
                            </View>
                        )
                    }}
                    alwaysBounceVertical={false}
                /> */}
                <FlatList
                    data={goalList}
                    renderItem={itemData => {
                        return <GoalItem itemData={itemData} handleDeleteGoal={handleDeleteGoal} />
                    }}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    )
}

export default App
