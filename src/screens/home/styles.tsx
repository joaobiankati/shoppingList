import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    top: {
        flex: 1,
        backgroundColor: "#7A4A9E",
        alignItems: "center",
        justifyContent: "center",
        
    },
    bottom: {
        height: 679,
        backgroundColor: "#EFFFFF",
        padding: 24,

    },
    title: {
        color: "#F2F2F2",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: 140,
        
    },
    form : {
        width: "100%",
        top: "21%",
        position: "absolute",
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: "row",
        gap: 4
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16, 
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 5,
        borderRadius: 5,
        width: 289,
        borderWidth: 0.5,
    
    },
    button: {
        width: 52,
        height: 56,
        backgroundColor: "#31C667",
        borderRadius: 6,
        padding: 18,
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
    
    },
    infoContainer: {
        display: "flex",
        marginTop: 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#D9D9D9"
    },
    infoContainerItem: {
        gap: 8,
        flexDirection: "row",
    },

    counter: {
        display: "flex",
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignItems: "center",
        borderRadius: 999,
        backgroundColor: "#D9D9D9",
        gap: 10,
        justifyContent: "center"
    },

    product: {
        color: "#31C667",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 700,
    },

    finished: {
        color: "#7A4A9E",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 700,
    }

})