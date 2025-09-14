import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

interface Props {
    name: string;
    finalized: boolean;
    onRemove: () => void;
    onToggle: () => void;
}

export function Product({name, finalized = false, onRemove, onToggle} : Props) {
    return (
        <View style={[styles.container, finalized && styles.containerChecked]}>
            <TouchableOpacity onPress={onToggle} activeOpacity={0.1}>
                {finalized ? (
                    <View style={styles.checkButtonPurple}>
                        <Text style={styles.checkmark}>✓</Text>
                    </View>
                ) : (
                    <View style={styles.checkButton}>
                    </View>
                )}
            </TouchableOpacity>
            
            <Text style={[styles.productName, finalized && styles.productNameChecked]}>
                {name}
            </Text>
            
            <TouchableOpacity onPress={onRemove} style={styles.removeButton} activeOpacity={0.1}>
                <Image 
                    source={require("../../assets/trash.png")}
                    style={styles.removeIcon}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 12,
        height: 56,
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: "#F2F2F2",
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        shadowOffset: {height: 2, width: 0},
        justifyContent: "space-between",
        borderColor: "#808080",
        marginBottom: 8,
    },

    containerChecked: {
        flexDirection: "row",
        padding: 12,
        height: 56,
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: "#F2F2F2",
        justifyContent: "space-between",
        borderColor: "#D9D9D9",
        marginBottom: 8,
    },

    checkButton: {
        
    },

    checkButtonPurple: {
        
    },

    productName: {
        
    },

    productNameChecked: {
        
    },

    removeButton: {
        
    },

    removeIcon: {
        
    },

    checkmark: {
        
    },

    emptyCheck: {
        
    }


})