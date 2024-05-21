import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { View } from "react-native"
import { Text } from "react-native-paper"
import RouterService from "../routers/RouterService"
import Customers from "./Customers"
import Setting from "./Setting"
import Routercustomers from "../routers/RouterCustomers"
import RouterServiceCustomer from "../routers/RouterServiceCustomer"
import Appointment from "./Appointment"

const Tab = createMaterialBottomTabNavigator()
const Customer = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="RouterServiceCustomer" component={RouterServiceCustomer}
                options={{
                    title: "Home",
                    tabBarIcon: 'home'
                }}
            />
            <Tab.Screen name="Appointment" component={Appointment}
                options={{
                    title: "Appointment",
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
export default Customer