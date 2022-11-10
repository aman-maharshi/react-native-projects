import { useState, useEffect } from "react"
import { View, StyleSheet, Text, Button, Alert } from "react-native"
import NumberComponent from "../components/NumberComponent"
import PrimaryButton from "../components/PrimaryButton"
import Title from "../components/Title"
import Colors from "../constants/colors"
import { FontAwesome } from "@expo/vector-icons"

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

const GameScreen = ({ setScreenNumber, userNumber, setNumberOfRounds }) => {
    const initialGuess = generateRandomBetween(1, 10, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === userNumber) {
            setScreenNumber(3)
        }
    }, [currentGuess])

    const increment = () => {
        if (currentGuess > userNumber) {
            Alert.alert("Don't Lie!", "You know thats wrong..", [{ text: "Sorry", style: "cancel" }])
            return
        }
        const number = generateRandomBetween(currentGuess + 1, 10, currentGuess)
        setNumberOfRounds(prev => prev + 1)
        setCurrentGuess(number)
    }

    const decrement = () => {
        if (currentGuess < userNumber) {
            Alert.alert("Don't Lie!", "You know thats wrong..", [{ text: "Sorry", style: "cancel" }])
            return
        }
        const number = generateRandomBetween(1, currentGuess, currentGuess)
        setNumberOfRounds(prev => prev + 1)
        setCurrentGuess(number)
    }

    return (
        <>
            <View style={styles.screen}>
                <Title>Your Phone's Guess</Title>
            </View>
            <View style={styles.inputContainer}>
                <NumberComponent>{currentGuess}</NumberComponent>
                <View>
                    <Text style={styles.text}>Higher or Lower</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonWrapper}>
                            <PrimaryButton onPressFunction={decrement}>
                                <FontAwesome name="minus" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonWrapper}>
                            <PrimaryButton onPressFunction={increment}>
                                <FontAwesome name="plus" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        paddingTop: 80,
        alignItems: "center"
    },
    inputContainer: {
        marginTop: 40,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        // android box shadow
        elevation: 8,
        // ios box shadow
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
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
