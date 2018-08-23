import React, { Component } from 'react';
import { ActivityIndicator, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['title', 'original_language'];
import styles from './style';

export default class tab2 extends Component {

    constructor(props) {
        super(props);
        this.state ={ isLoading: true};
        this.state = {
            searchTerm: '',
            dataSource:[]
        }
    }
    componentDidMount(){
        return fetch('https://api.themoviedb.org/3/discover/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.results,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render() {

        const filteredEmails = this.state.dataSource.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 50}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <SearchInput
                    onChangeText={(term) => { this.searchUpdated(term) }}
                    style={styles.searchInput}
                    placeholder="Type a message to search"



                />
                <ScrollView>
                    {filteredEmails.map(email => {
                        return (
                            <TouchableOpacity onPress={()=>alert(email.title)} key={email.vote_count} style={styles.emailItem}>
                                <View>
                                    <Text>{email.title}</Text>
                                    <Text style={styles.emailSubject}>{email.original_language}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}


