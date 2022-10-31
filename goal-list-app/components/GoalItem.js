import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
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

const GoalItem = ({ itemData }) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
}

export default GoalItem
