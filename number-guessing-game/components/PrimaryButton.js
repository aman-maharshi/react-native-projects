import { View, Text, Pressable, StyleSheet } from "react-native"

import Colors from "../constants/colors"

const PrimaryButton = ({ children, onPressFunction }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            {/* prettier-ignore */}
            <Pressable
                onPress={onPressFunction}
                style={({ pressed }) => (pressed ? [styles.buttonInnerContainer, styles.iosPressed] : styles.buttonInnerContainer)}
                android_ripple={{ color: Colors.primary600 }}
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
        backgroundColor: Colors.primary500,
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
