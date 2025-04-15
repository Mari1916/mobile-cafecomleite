
import { Link } from "expo-router"
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen(){
    return(
        <View>
            <View>
                <Text>E-mail:</Text>
                <TextInput placeholder="Digite seu email:"></TextInput>
                <Text>Senha:</Text>
                <TextInput placeholder="Digite sua senha:" secureTextEntry></TextInput>
            </View>
            <Link href={"/home/page"} asChild>
                <TouchableOpacity>
                    <Text>Enviar</Text>
                </TouchableOpacity>
            </Link>
            <Link href={"/cadastro/page"}><Text>Crie sua conta</Text></Link>
        </View>
    )
}