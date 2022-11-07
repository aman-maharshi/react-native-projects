import { useState } from "react"
import { TextInput, View, StyleSheet, Alert } from "react-native"
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

const StartGameScreen = ({ setScreenNumber, setUserNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState("")

    const handleInputChange = value => {
        setEnteredNumber(value)
    }

    const handleReset = () => {
        setEnteredNumber("")
    }

    const handleConfirm = () => {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 9) {
            // prettier-ignore
            Alert.alert(
                "Invalid Number",
                "Number has to be between 1 and 9",
                [{text: "Okay", style: "default", onPress: handleReset}]
            )
            return
        }
        setUserNumber(chosenNumber)
        setScreenNumber(2)
    }

    return (
        <View style={styles.inputContainer}>
            <View style={styles.numberInputContainer}>
                {/* prettier-ignore */}
                <TextInput
                    value={enteredNumber}
                    onChangeText={handleInputChange}
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton onPressFunction={handleReset}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton onPressFunction={handleConfirm}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
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
    numberInputContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: "bold",
        color: Colors.accent500,
        borderBottomWidth: 2,
        borderBottomColor: Colors.accent500,
        textAlign: "center"
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    buttonWrapper: {
        flex: 1
    }
})
