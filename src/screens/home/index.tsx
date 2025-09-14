import { Text, View, TextInput} from "react-native";
import { styles } from "./styles";


export default function Home(){

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Lista de Compras</Text>

            </View>

            <View style={styles.bottom}>

            </View>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Adicione um novo produto"
                placeholderTextColor={"#808080"}
                keyboardType="default"
                />
            </View>

            
        </View>

    )

}