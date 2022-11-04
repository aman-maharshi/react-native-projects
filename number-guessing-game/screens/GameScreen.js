import { useState } from "react"
import { View, StyleSheet, Text } from "react-native"

const GameScreen = ({ setScreenNumber, userNumber }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.heading}>Your selected {userNumber}</Text>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#3b021f",
        // android box shadow
        elevation: 8,
        // ios box shadow
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    heading: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
})
