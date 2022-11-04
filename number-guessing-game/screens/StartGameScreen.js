import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

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
    numberInputContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: "bold",
        color: "#ddb52f",
        borderBottomWidth: 2,
        borderBottomColor: "#ddb52f",
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

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.numberInputContainer}>
                {/* prettier-ignore */}
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen
