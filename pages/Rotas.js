import { createStackNavigator } from "@react-navigation/stack";

import Login from './Login';
import CadastroI from './CadastroI';
// import CadastroII from './CadastroII';
// import CadastroIII from './CadastroIII';
import CadastroIV from './CadastroIV';
import Chat from './Chat';
import BuscaChat from './BuscaChat';

const Stack = createStackNavigator();

export default function Rotas(){
    return(
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CadastroI" component={CadastroI}/>
        {/* <Stack.Screen name="CadastroII" component={CadastroII}/>
        <Stack.Screen name="CadastroIII" component={CadastroIII}/> */}
        <Stack.Screen name="CadastroIV" component={CadastroIV}/>
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="BuscaChat" component={BuscaChat}/>
    </Stack.Navigator>
    );
}