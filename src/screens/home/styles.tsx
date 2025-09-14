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
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: 140,
        fontFamily: "Inter",
        textAlign: "center",
        
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
        height: 54,
        padding: 16, 
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 5,
        borderRadius: 5,
        width: 289,
        borderWidth: 0.5,
    
    },
    button: {
        borderRadius: 6,
        padding: 18,
        width: 52,
        height: 52,
        backgroundColor: "#31C667",
        display: "flex",
        gap: 4,

        alignItems: "center",
        justifyContent: "center",
    
    },
    infoContainer: {
        display: "flex",
        marginTop: 32,
        flexDirection: "row",
        paddingBottom: 20,

        justifyContent: "space-between",
        alignItems: "flex-end",
        alignSelf: "stretch",

        borderBottomWidth: 1,
        borderColor: "#D9D9D9",
    },
    infoContainerItem: {
        gap: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
    },

    counter: {
        gap: 8,
        display: "flex",
        paddingHorizontal: 8,
        paddingVertical: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
        borderRadius: 999,
        backgroundColor: "#D9D9D9",
    },

    listView: {
        flexGrow: 1,
        paddingTop: 20,
    },

    emptyState: {
        alignItems: "center",
        paddingHorizontal: 40,
        paddingTop: 40,
    },
    
    emptyIcon: {
        width: 56,
        height: 56,
        marginBottom: 16,
    },
    
    emptyListText: {
        alignItems: "center",
    },
    
    emptyTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#808080",
        textAlign: "center",
        marginBottom: 8,
        lineHeight: 22,
    },
    
    emptyTitleBottom: {
        fontSize: 14,
        fontWeight: "400",
        color: "#808080",
        textAlign: "center",
        lineHeight: 20,
    }

})