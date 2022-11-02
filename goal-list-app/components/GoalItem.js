import { StyleSheet, Text, View, Pressable } from "react-native"

const styles = StyleSheet.create({
    goalItem: {
        marginBottom: 14,
        borderRadius: 6,
        backgroundColor: "#5e0acc"
    },
    goalText: {
        padding: 10,
        color: "white"
    },
    pressedItem: {
        opacity: 0.5
    }
})

const GoalItem = ({ itemData, handleDeleteGoal }) => {
    return (
        <View style={styles.goalItem}>
            {/* prettier-ignore */}
            <Pressable 
                android_ripple={{ color: "#dddddd" }} 
                onPress={() => handleDeleteGoal(itemData.item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    )
}

export default GoalItem
