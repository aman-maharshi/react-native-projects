import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import StartGameScreen from "./screens/StartGameScreen"

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
})

const App = () => {
    return (
        <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
            {/* prettier-ignore */}
            <ImageBackground 
                source={require("./assets/images/background.png")} 
                resizeMode="cover" 
                style={styles.rootScreen} 
                imageStyle={styles.backgroundImage}
            >
                <StartGameScreen />
            </ImageBackground>
        </LinearGradient>
    )
}

export default App
