import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import {Button} from "../Study/components/common/Button";
let i =0;
export default class LatestComment extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
        }
    }

    componentDidMount(){
        return fetch('https://api.themoviedb.org/3/discover/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb')
            .then((response) => response.json())
            .then((responseJson) => {
            console.log("responseJson", responseJson);
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

    renderRow = (rowData) => {
        i++;
        if (i % 2) {
            return (
                <View style={{backgroundColor: 'red'}}>
                    <Text style={{color:'#fff'}}> {rowData.item.original_language},{rowData.item.title}</Text>
                </View>
            );
        } else {
            return (
                <View style={{backgroundColor: 'blue'}}>
                    <Text style={{color:'yellow'}}> {rowData.item.original_language},{rowData.item.title}</Text>
                </View>
            );
        }
    };
    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={(item) => this.renderRow(item)}
                />

            </View>
        );
    }
}