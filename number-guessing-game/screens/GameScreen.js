import { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import Title from "../components/Title"

const GameScreen = ({ setScreenNumber, userNumber }) => {
    return (
        <View style={styles.screen}>
            <Title>Computer's Guess</Title>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 80
    }
})
