import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, } from "react-native";
import { styles } from "./styles";


export default function Home(){
    const [productName, setProductName] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Lista de Compras</Text>

            </View>

            <View style={styles.bottom}>
                <View style={styles.infoContainer}>
                    <View style={styles.infoContainerItem}>
                        <Text style={styles.product}>Produtos</Text>
                        <Text style={styles.counter}>0</Text>
                    </View>

                    <View style={styles.infoContainerItem}>
                        <Text style={styles.finished}>Finalizados</Text>
                        <Text style={styles.counter}>0</Text>
                    </View>
                    
                </View>
                
            </View>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Adicione um novo produto"
                placeholderTextColor={"#808080"}
                keyboardType="default"
                onChangeText={setProductName}
                value={productName}
                />

                <TouchableOpacity activeOpacity={0.5}>
                   <Image 
                        source={require('../../../assets/plus.png')}
                        style={styles.button}
                    /> 

                </TouchableOpacity>

            </View>

            
        </View>

    )

}