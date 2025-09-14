import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { Product } from "../../components/Product";
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

    function handleAddProduct() {
        if (newProduct.trim() === "") {
            setNewProduct("");
            return Alert.alert("Nome do produto Inválido");
        } else if (products.some(item => item.name === newProduct)) {
            setNewProduct("");
            return Alert.alert("Produto já cadastrado");
        }
        setProducts([...products, { name: newProduct, finalized: false }]);
        setNewProduct("");
    }

    function handleRemoveProduct(name: string) {
        return Alert.alert("Remover", `Deseja remover o produto ${name}`, [
            {
                text: "Sim",
                style: "destructive",
                onPress: () => {
                    setProducts(products.filter(p => p.name !== name));
                }
            },
            {
                text: "Não",
            }
        ]);
    }

    function handleOnToggle(name: string) {
        setProducts(products.map(item => 
            item.name === name 
                ? { ...item, finalized: !item.finalized } 
                : item
        ));
    }

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

                <FlatList
                    data={products}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) =>
                        <Product
                            name={item.name}
                            finalized={item.finalized}
                            onRemove={() => handleRemoveProduct(item.name)}
                            onToggle={() => handleOnToggle(item.name)}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listView}
                    ListEmptyComponent={() => (
                        <>
                            <View style={styles.emptyState}>
                                <Image
                                    source={require('../../../assets/shopping_list.png')}
                                    style={styles.emptyIcon}
                                />
                                <View style={styles.emptyListText}>
                                    <Text style={styles.emptyTitle}>Você ainda não tem produtos na lista de compra</Text>
                                    <Text style={styles.emptySubtitle}>Adicione produtos e organize sua lista de compras</Text>
                                </View>
                            </View>
                            
                        </>
                    )}
                    scrollEnabled={products.length > 0}
                />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione um novo produto"
                    placeholderTextColor={"#808080"}
                    value={newProduct}
                    onChangeText={setNewProduct}
                />
                <TouchableOpacity onPress={() => handleAddProduct()} activeOpacity={0.8}>
                    <Image
                        source={require('../../../assets/plus.png')}
                        style={styles.button}
                        
                    />
                </TouchableOpacity>
            </View>
        </View>
    )

}