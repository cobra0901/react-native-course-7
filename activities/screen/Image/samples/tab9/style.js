import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 28,
        fontWeight: '300',
        textAlign: 'center',
        margin: 20,
        marginTop: (Platform.OS === 'ios' ? 40 : 20),
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
        backgroundColor: 'transparent',
    },
    slider: {
        height: 30,
        margin: 10,
    },
    toggle: {
        width: 120,
        backgroundColor: '#333',
        borderRadius: 3,
        padding: 5,
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        margin: 10,
        color: 'rgba(255, 255, 255, 1)',
    },
    toggledOn: {
        color: 'rgba(255, 33, 33, 1)',
        fontSize: 16,
        transform: [{
            rotate: '8deg',
        }, {
            translateY: -20,
        }],
    },
    sectionHeader: {
        backgroundColor: '#F5FCFF',
        padding: 15,
    },
    sectionHeaderText: {
        textAlign: 'center',
        fontSize: 18,
    },
});

export default styles;

