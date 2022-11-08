import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Colors from "./constants/colors"

import StartGameScreen from "./screens/StartGameScreen"
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOverScreen"

const App = () => {
    const [screenNumber, setScreenNumber] = useState(1)
    const [userNumber, setUserNumber] = useState()

    const getScreen = () => {
        switch (screenNumber) {
            case 1:
                return <StartGameScreen setScreenNumber={setScreenNumber} setUserNumber={setUserNumber} />
            case 2:
                return <GameScreen setScreenNumber={setScreenNumber} userNumber={userNumber} />
            case 3:
                return <GameOverScreen setScreenNumber={setScreenNumber} userNumber={userNumber} />
            default:
                return <StartGameScreen setScreenNumber={setScreenNumber} />
        }
    }

    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require("./assets/images/background.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>{getScreen()}</SafeAreaView>
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
