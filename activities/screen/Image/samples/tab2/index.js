import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';
const KEYS_TO_FILTERS = ['user.name', 'subject'];
import styles from './style';

export default class tab2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
    render() {
        const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
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
                            <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                                <View>
                                    <Text>{email.user.name}</Text>
                                    <Text style={styles.emailSubject}>{email.subject}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}
