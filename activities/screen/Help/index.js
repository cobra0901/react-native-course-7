import React from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';
import styles from './style';
import ScrollableTabView ,{ ScrollableTabBar }  from 'react-native-scrollable-tab-view';

export default () => {
    return <ScrollableTabView
        initialPage={1}
        renderTabBar={() => <ScrollableTabBar />}
    >
        <ScrollView tabLabel="ios-paper" style={styles.tabView}>
            <View style={styles.card}>
                <Text>News</Text>
            </View>
        </ScrollView>
        <ScrollView tabLabel="ios-people" style={styles.tabView}>
            <View style={styles.card}>
                <Text>Friends</Text>
            </View>
        </ScrollView>
        <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
            <View style={styles.card}>
                <Text>Messenger</Text>
            </View>
        </ScrollView>
        <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
            <View style={styles.card}>
                <Text>Notifications</Text>
            </View>
        </ScrollView>
        <ScrollView tabLabel="ios-list" style={styles.tabView}>
            <View style={styles.card}>
                <Text>Other nav</Text>
            </View>
        </ScrollView>
    </ScrollableTabView>;
}
