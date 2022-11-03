import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#72063c",
        // android box shadow
        elevation: 8,
        // ios box shadow
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        marginVertical: 8,
        fontWeight: "bold",
        color: "#ddb52f",
        borderBottomWidth: 2,
        borderBottomColor: "#ddb52f",
        textAlign: "center"
    }
})

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} placeholderTextColor="#997c24" />
            <View>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    )
}

export default StartGameScreen
