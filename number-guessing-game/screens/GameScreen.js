import { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import NumberComponent from "../components/NumberComponent"
import Title from "../components/Title"

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen = ({ setScreenNumber, userNumber }) => {
    const initialGuess = generateRandomBetween(0, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title>Computer's Guess</Title>
            <NumberComponent>{currentGuess}</NumberComponent>
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
