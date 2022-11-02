import { useState } from "react"
import { StyleSheet, Text, View, ScrollView, FlatList, Button } from "react-native"
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
        flex: 5,
        marginTop: 16
    },
    noGoalsText: {
        color: "#34495e",
        marginTop: 10,
        textAlign: "center"
    }
})

const App = () => {
    const [goalList, setGoalList] = useState([])
    const [showModal, setShowModal] = useState(false)

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

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <View style={styles.appContainer}>
            <Button onPress={openModal} title="Add New Goal" color="#5e0acc"></Button>
            <GoalInput handleAddGoal={handleAddGoal} showModal={showModal} closeModal={closeModal} />
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
