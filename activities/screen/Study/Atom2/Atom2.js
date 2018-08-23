import React, {Component} from 'react';
import {Platform, Image, ScrollView, TouchableOpacity, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import weatherData from './data';
import styles from './style';
export default class Atom2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: weatherData,
        }
    }

    render() {

        const slides = this.state.weather.map((elem, index) => {
            const hourView = elem.hours.map((hourElem, hourIndex) => {
                return (
                    <View key={hourElem.key} style={styles.withinDayHoursBox}>
                        <Text
                            style={hourIndex == 0 ? styles.withinDayHoursTimeBold : styles.withinDayHoursTime}>{hourElem.time}</Text>
                        <Icon name={hourElem.icon} size={25}
                              style={[styles.withinDayHoursIcon, {color: hourElem.color}]}/>
                        <Text
                            style={hourIndex == 0 ? styles.withinDayHoursDegreeBold : styles.withinDayHoursDegree}>{hourElem.degree}</Text>
                    </View>
                );
            });

            const dayView = elem.days.map((dayElem, dayIndex) => {
                return (
                    <View key={dayElem.key} style={styles.withinWeekLine}>
                        <View style={styles.withinWeekDay}>
                            <Text style={styles.withinWeekDayText}>{dayElem.day}</Text>
                        </View>
                        <View style={styles.withinWeekIcon}>
                            <Icon name={dayElem.icon} style={styles.withinWeekIconIcon} size={25}/>
                        </View>
                        <View style={styles.withinWeekDegree}>
                            <Text style={styles.withinWeekHigh}>{dayElem.high}</Text>
                            <Text
                                style={elem.night ? styles.withinWeekLowNight : styles.withinWeekLow}>{dayElem.low}</Text>
                        </View>
                    </View>
                );
            });

            return (
                <View key={elem.key}>
                    <Image style={styles.image} source={elem.bg}/>
                    <ScrollView style={styles.pageContainer} showsVerticalScrollIndicator={false}>
                        <View style={styles.headInfo}>
                            <Text style={styles.city}>{elem.city}</Text>
                            <Text style={styles.abs}>{elem.abs}</Text>
                            <Text style={styles.degree}>{elem.degree}</Text>
                            <Text style={styles.circle}>°</Text>
                        </View>
                        <View style={styles.withinDay}>
                            <View style={styles.withinDayGeneral}>
                                <View style={styles.withinDayHead}>
                                    <Text style={styles.withinDayWeek}>{elem.today.week}</Text>
                                    <Text style={styles.withinDayDay}>{elem.today.day}</Text>
                                </View>
                                <View style={styles.withinDayTail}>
                                    <Text style={styles.withinDayHigh}>{elem.today.high}</Text>
                                    <Text
                                        style={elem.night ? styles.withinDayLowNight : styles.withinDayLow}>{elem.today.low}</Text>
                                </View>
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                        style={styles.withinDayHoursContainer}>
                                <View style={styles.withinDayHours}>
                                    {hourView}
                                </View>
                            </ScrollView>
                            <View style={styles.withinWeek}>
                                {dayView}
                            </View>
                            <View style={styles.weatherInfo}>
                                <Text style={styles.weatherInfoText}>{elem.info}</Text>
                            </View>
                            <View style={styles.weatherOther}>
                                <View style={styles.weatherOtherSection}>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>日出：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.rise}</Text>
                                    </View>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>日落：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.down}</Text>
                                    </View>
                                </View>
                                <View style={styles.weatherOtherSection}>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>降雨概率：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.prop}</Text>
                                    </View>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>湿度：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.humi}</Text>
                                    </View>
                                </View>
                                <View style={styles.weatherOtherSection}>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>风速：</Text>
                                        <Text style={styles.weatherOtherValue}><Text
                                            style={{fontSize: 10}}>{elem.dir}</Text>{elem.speed}</Text>
                                    </View>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>体感温度：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.feel}</Text>
                                    </View>
                                </View>
                                <View style={styles.weatherOtherSection}>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>降水量：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.rain}</Text>
                                    </View>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>气压：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.pres}</Text>
                                    </View>
                                </View>
                                <View style={styles.weatherOtherSection}>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>能见度：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.sight}</Text>
                                    </View>
                                    <View style={styles.weatherOtherLine}>
                                        <Text style={styles.weatherOtherTitle}>紫外线指数：</Text>
                                        <Text style={styles.weatherOtherValue}>{elem.uv}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        });
        return (
            <View>
                {slides}
            </View>
        )
    }
}
