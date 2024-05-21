import { createStackNavigator } from "@react-navigation/stack";
import { useMyContextController } from "../store";
import { IconButton } from "react-native-paper";
import ServicesCustomer from "../screens/ServicesCustomer";
import MakeAppointment from "../screens/MakeAppointment";

const Stack = createStackNavigator()
const RouterServiceCustomer = () =>{
    const [controller, dispatch] = useMyContextController()
    const {userLogin} = controller

    return(
        <Stack.Navigator
            initialRouteName="Services"
            screenOptions={{
                title: (userLogin!=null)&& (userLogin.name),
                headerTitleAlign: 'center',
                headerShown:false,
                headerStyle: {
                    backgroundColor: "tomato"
                },
                headerRight: (props) => <IconButton icon={"account"}/>
            }}
        >
            <Stack.Screen name="ServicesCustomer" component={ServicesCustomer}/>
            <Stack.Screen name="MakeAppointment" component={MakeAppointment}/>
        </Stack.Navigator>
    )
}
export default RouterServiceCustomer