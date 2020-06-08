import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    Dimensions,
    ScrollView
} from 'react-native';
import ToDo from "./ToDo";

const {height, width} = Dimensions.get("window");

export default class App extends React.Component {
    state = {
        newToDo: ""
    }
    render() {
        const {newToDo} = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    <StatusBar barStyle="light-content"/>
                    <Text style={styles.title}>Kawai To Do</Text>
                    <View style={SVGElementInstanceList.card}>
                        <TextInput
                            style={styles.input}
                            placdeholder={"New To Do"}
                            value={newToDo}
                            onChangeText={this._crontollNewToDo}
                            placeholderTextColor={"#999"}
                            returnKeyType={"done"}
                            autoCorrect={false}/>
                        <ScrollView contentContainerStyle={styles.toDos}>
                            <ToDo/>
                        </ScrollView>
                    </View>
                </Text>
            </View>
        );
    }
    _crontollNewToDo = text => {
        this.setState({newToDo: text})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F23657',
        alignItems: 'center'
    },
    title: {
        color: "white",
        fontSize: 30,
        marginTop: 50,
        fontWeight: '200',
        marginBottom: 30
    },
    card: {
        backgroundColor: "white",
        flex: 1,
        width: width - 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: "rgba(50,50,50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 3
            }
        })

    },
    input: {
        padding: 20,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        fontSize: 25
    },
    toDos:{
      alignitems:'center'
    }
});
