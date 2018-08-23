import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import ExpandableList from 'react-native-expandable-section-flatlist';
import {arrow2} from '../../../../global/imgUrl';
import MockData from './datasource';

export default class Example extends Component {

        _renderRow = (rowItem, rowId, sectionId) => (
        <TouchableOpacity key={rowId} onPress={() => {
        }}>
            <View>
                <Text style={{marginLeft:45,color:'#724'}}>
                    {rowItem.title}
                </Text>
            </View>
        </TouchableOpacity>
    );

    _renderSection = (section, sectionId) => {
        return (
            <View style={{flex:1,flexDirection:'row',paddingHorizontal:15,justifyContent: 'space-between',backgroundColor:'#774'}}>
                <View >
                    <Text style={{fontSize:25,color:'pink',marginLeft:15}}>
                        {section}
                    </Text>
                </View>
                <View>
                    <Image
                        source={{uri: arrow2}}
                        style={{width: 40, height: 40, marginHorizontal: 5}}
                    />
                </View>
            </View>
        );
    };

    render() {
        return (
            <ExpandableList
                dataSource={MockData.workbenchData}
                headerKey="title"
                memberKey="member"
                renderRow={this._renderRow}
                renderSectionHeaderX={this._renderSection}
                openOptions={[1, 2,]}
            />
        );
    }
}