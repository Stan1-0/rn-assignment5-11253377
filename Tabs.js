import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator

function MyTabs () {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="My cards" component={CardsScreen} />
            <Tab.Screen name="Statistics" component={StatisticsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default tabs;