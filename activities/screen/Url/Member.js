import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Member extends React.Component {

    constructor(props){
        super(props);
        this.state ={ isLoading: true}
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

    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:20}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text>{item.title}, {item.original_language}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}