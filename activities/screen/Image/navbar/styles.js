import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin:0
    },
    active: {
        color: '#44cc00',
        width:'10%',
        fontWeight: 'bold',
        backgroundColor:'#cccc00',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        fontSize: 14
    },

    nonactive: {
        color: '#12ffcc',
        width:'10%',
        height: 20,
        fontSize: 14,
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
