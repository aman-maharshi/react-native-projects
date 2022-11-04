import { Children } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 8,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        backgroundColor: "#72063c",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    iosPressed: {
        opacity: 0.75
    }
})

const PrimaryButton = ({ children }) => {
    const handleButtonClick = () => {
        console.log("Click")
    }

    return (
        <View style={styles.buttonOuterContainer}>
            {/* prettier-ignore */}
            <Pressable
                onPress={handleButtonClick}
                style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.iosPressed] : styles.buttonInnerContainer)}
                android_ripple={{ color: "#640233" }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton
