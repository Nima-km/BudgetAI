import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function RootLayout() {
    const [loaded, fontError] = useFonts({
        "Metro-Medium": require("@/assets/fonts/Metropolis-Medium.ttf"),
        "Metro-SemiBold": require("@/assets/fonts/Metropolis-SemiBold.ttf"),
        "Metro-Regular": require("@/assets/fonts/Metropolis-Regular.ttf"),
        "Metro-Bold": require("@/assets/fonts/Metropolis-Bold.ttf"),
        "GS-Medium": require("@/assets/fonts/general-sans/GeneralSans-Medium.otf"),
    });
    return (
        <GestureHandlerRootView>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </GestureHandlerRootView>
    );
}
