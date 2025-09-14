import { useState } from "react";
import {Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface ProductType {
    name: string;
    finalized: boolean;
}

export default function Home() {
    const [newProduct, setNewProduct] = useState("");
    const [products, setProducts] = useState<ProductType[]>([]);

    const productCount = products.length;
    const productFinalizedCount = products.reduce((counter, product) => {
        return counter + (product.finalized ? 1 : 0);
    }, 0);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>Lista de Compras</Text>
            </View>

            <View style={styles.bottom}>
                <View style={styles.infoContainer}>
                    <View style={styles.infoContainerItem}>
                        <Text style={styles.product}>Produtos</Text>
                        <Text style={styles.counter}>{productCount}</Text>
                    </View>

                    <View style={styles.infoContainerItem}>
                        <Text style={styles.finished}>Finalizados</Text>
                        <Text style={styles.counter}>{productFinalizedCount}</Text>
                    </View>  
                </View>

            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione um novo produto"
                    placeholderTextColor={"#808080"}
                    value={newProduct}
                    onChangeText={setNewProduct}
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