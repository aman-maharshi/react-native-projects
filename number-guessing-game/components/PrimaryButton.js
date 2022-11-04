import { Children } from "react"
import { View, Text, Pressable, StyleSheet } from "react-native"

const PrimaryButton = ({ children, onPressFunction }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            {/* prettier-ignore */}
            <Pressable
                onPress={onPressFunction}
                style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.iosPressed] : styles.buttonInnerContainer)}
                android_ripple={{ color: "#640233" }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

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
