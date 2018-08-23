import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Spinner, Card, CardSection } from './components/common';
import Header from './components/common/header';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {loggedIn: null};

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDJeNXgl6yyA1_QDXjTXxPiKC2MsQxO1H8",
            authDomain: "fir-example-react-native.firebaseapp.com",
            databaseURL: "https://fir-example-react-native.firebaseio.com",
            projectId: "fir-example-react-native",
            storageBucket: "fir-example-react-native.appspot.com",
            messagingSenderId: "555526346334"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            }else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>

                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner size="large" />
                        </CardSection>
                    </Card>)
        }
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        )
    }

}
export default App;