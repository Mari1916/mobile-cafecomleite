import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    inputContainer: {
        width: "100%",
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#333",
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "brown",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 10,
        width: 150,
    },
    buttonText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },
    link: {
        color: "#black",
        fontSize: 14,
        textAlign: "center",
        marginTop: 10,
    },
});

export default styles;