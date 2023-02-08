import { SafeAreaView, StyleSheet, TextInput } from "react-native";

function Input() {
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                editable
                multiline
                placeholder="Search on Youtube"
                placeholderTextColor={{color:'grey'}}
                keyboardType="default"
                maxLength={40}
                cursorColor='#fff'
                keyboardAppearance="dark"
                selectionColor={{color:'#fff'}}
            />
        </SafeAreaView>
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5
    }
})