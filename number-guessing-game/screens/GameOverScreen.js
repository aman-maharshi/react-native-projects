import { View, StyleSheet, Text } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import Colors from "../constants/colors"
import Title from "../components/Title"

const GameOverScreen = ({ setScreenNumber, userNumber, numberOfRounds, setNumberOfRounds }) => {
    const playAgain = () => {
        setNumberOfRounds(0)
        setScreenNumber(1)
    }

    return (
        <View style={styles.screen}>
            <View style={styles.title}>
                <Title>Game Over</Title>
            </View>

            <Text style={styles.summary}>
                Your phone needed <Text style={styles.highlight}>{numberOfRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>

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
    title: {
        flexDirection: "row",
        justifyContent: "center"
    },
    screen: {
        flex: 1,
        padding: 24,
        paddingTop: 80
    },
    buttonContainer: {
        flexDirection: "row"
    },
    buttonWrapper: {
        flex: 1
    },
    summary: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
        marginVertical: 40,
        paddingHorizontal: 10
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: "orange"
    }
})
