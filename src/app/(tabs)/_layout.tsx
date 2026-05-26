import MyTabBar from "@/components/navComponents/MyTabBar";
import { colors } from "@/theme";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                sceneStyle: {
                    backgroundColor: colors.background,
                },
            }}
            tabBar={(props) => <MyTabBar {...props} />}
        >
            <Tabs.Screen name="index" options={{ title: "index" }} />
            <Tabs.Screen name="analytics" options={{ title: "analytics" }} />
            <Tabs.Screen name="log" options={{ title: "log" }} />
        </Tabs>
    );
}
