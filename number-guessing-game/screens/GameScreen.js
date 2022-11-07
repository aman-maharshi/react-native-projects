import { useState } from "react"
import { View, StyleSheet, Text, Button, Alert } from "react-native"
import NumberComponent from "../components/NumberComponent"
import PrimaryButton from "../components/PrimaryButton"
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
    const initialGuess = generateRandomBetween(1, 10, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    const increment = () => {
        if (currentGuess > userNumber) {
            Alert.alert("Don't Lie!", "You know thats wrong..", [{ text: "Sorry", style: "cancel" }])
            return
        }
        const number = generateRandomBetween(currentGuess + 1, 10, currentGuess)
        setCurrentGuess(number)
    }

    const decrement = () => {
        if (currentGuess < userNumber) {
            Alert.alert("Don't Lie!", "You know thats wrong..", [{ text: "Sorry", style: "cancel" }])
            return
        }
        const number = generateRandomBetween(1, currentGuess, currentGuess)
        setCurrentGuess(number)
    }

    const playAgain = () => {
        setScreenNumber(1)
    }

    return (
        <View style={styles.screen}>
            <Title>Computer's Guess</Title>
            <NumberComponent>{currentGuess}</NumberComponent>
            <View>
                <Text style={styles.text}>Higher or Lower</Text>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonWrapper}>
                        <PrimaryButton onPressFunction={decrement}> - </PrimaryButton>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <PrimaryButton onPressFunction={increment}> + </PrimaryButton>
                    </View>
                </View>

                {currentGuess === userNumber && (
                    <>
                        <Text style={styles.win}>Correct guess, You win!</Text>
                        <View style={styles.buttonContainer}>
                            <View style={styles.buttonWrapper}>
                                <PrimaryButton onPressFunction={playAgain}> Play Again </PrimaryButton>
                            </View>
                        </View>
                    </>
                )}
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 80
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    buttonWrapper: {
        flex: 1
    },
    text: {
        fontSize: 16,
        color: "white",
        textAlign: "center"
    },
    win: {
        fontSize: 20,
        color: "#159e0f",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 8,
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 10
    }
})
