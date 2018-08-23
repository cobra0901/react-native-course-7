import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import ExpandableList from 'react-native-expandable-section-flatlist';
import MockData from './datasource';
import DictStyle from '../../../../global/dictStyle';
import {arrow1} from '../../../../global/imgUrl';

export default class Example extends Component {

    _renderRow = (rowItem, rowId, sectionId) => (
        <TouchableOpacity key={rowId} onPress={() => {
        }}>
            <View
                style={{
                    alignItems: 'center',
                    borderWidth: 0.5, borderColor: DictStyle.colorSet.lineColor,
                    backgroundColor:'#456'
                }}
            >
                <Text style={{fontSize: DictStyle.fontSet.bSize, color: "#073"}}>
                    {rowItem.title}
                </Text>
            </View>
        </TouchableOpacity>
    );

    _renderSection = (section, sectionId) => {
        return (
            <View
                style={{
                    height: 30, flexDirection: 'row',marginHorizontal:5,padding:5,
                    justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5,
                    borderBottomColor: "#459"
                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: DictStyle.fontSet.qSize, color: "#702"}}>
                        {section}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={{uri: arrow1}}
                        style={{width: 50, height: 40, marginHorizontal: 5}}
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