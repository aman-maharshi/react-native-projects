import { Text, StyleSheet } from "react-native"
import Colors from "../constants/colors"

const Title = ({ children }) => {
    return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        padding: 12,
        borderWidth: 2,
        borderColor: "white",
        fontWeight: "bold",
        color: "white"
    }
})
