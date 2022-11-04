import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, ImageBackground } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"

const App = () => {
    const [screenNumber, setScreenNumber] = useState(1)
    const [userNumber, setUserNumber] = useState()

    const getScreen = () => {
        switch (screenNumber) {
            case 1:
                return <StartGameScreen setScreenNumber={setScreenNumber} setUserNumber={setUserNumber} />
            case 2:
                return <GameScreen setScreenNumber={setScreenNumber} userNumber={userNumber} />
            default:
                return <StartGameScreen setScreenNumber={setScreenNumber} />
        }
    }

    return (
        <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
            {/* prettier-ignore */}
            <ImageBackground 
                source={require("./assets/images/background.png")} 
                resizeMode="cover" 
                style={styles.rootScreen} 
                imageStyle={styles.backgroundImage}
            >
            { getScreen() }
            </ImageBackground>
        </LinearGradient>
    )
}

export default App

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
})
