import { View, StyleSheet, Text } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

const GameOverScreen = ({ setScreenNumber, userNumber }) => {
    const playAgain = () => {
        setScreenNumber(1)
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.win}>Correct guess, You won!</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton onPressFunction={playAgain}> Play Again </PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 80
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
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    buttonWrapper: {
        flex: 1
    }
})
