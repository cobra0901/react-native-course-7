import React, { PureComponent } from 'react';
import { Text, Button,ImageBackground, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import styles from './style';
import { fox, cat, background, element, lion } from '../../../../../assets/images';
import {width} from "../../../../global/dictStyle";

const newImage = [lion, fox, cat, background, element];
const image = index => ({ image: newImage[index % newImage.length] });
const items = Array.from(Array(5)).map((_, index) => image(index));

export default class tab1 extends PureComponent {
    renderItemComponent = ({ item }) => (
        <View style={{flex:1,flexDirection:'column'}}>
            <ImageBackground
                style={{width:width}}
                source={item.image}
            >
                <View style={styles.carousel}>
                    <Text style={{fontSize:30,color:'#fff'}}>how are you</Text>
                    <Button
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </ImageBackground>

            <View style={{background:'#994'}}>
            <Button
                title="Ok More"
                color="#221584"
            />
            </View>
            <Text style={{fontSize:20,color:'#753'}}>how are you going with your homework?</Text>

        </View>
    );
    render() {
        return (
            <View style={styles.container}>
                <SwiperFlatList
                    style={{height:270}}
                    autoplay
                    paginationDefaultColor = {'#cc1230'}
                    paginationActiveColor={'pink'}
                    autoplayDelay={3}
                    index={3}
                    autoplayLoop
                    data={items}
                    renderItem={this.renderItemComponent}
                    showPagination
                />
            </View>
        );
    }
}
