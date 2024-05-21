import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { View } from "react-native"
import { Text } from "react-native-paper"
import RouterService from "../routers/RouterService"
import Customers from "./Customers"
import Setting from "./Setting"
import Routercustomers from "../routers/RouterCustomers"

const Tab = createMaterialBottomTabNavigator()
const Admin = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="RouterService" component={RouterService}
                options={{
                    title: "Home",
                    tabBarIcon: 'home'
                }}
            />
            <Tab.Screen name="RouterCustomers" component={Routercustomers}
                options={{
                    title: "Customers",
                    tabBarIcon: 'account'
                }}
            />
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarIcon: 'cog'
                }}
            />
        </Tab.Navigator>
    )
}
export default Admin