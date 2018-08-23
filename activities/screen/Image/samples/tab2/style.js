import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    emailItem:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
    },
    emailSubject: {
        color: 'rgba(0,0,0,0.5)'
    },
    searchInput:{
        padding: 10,
        borderColor: '#453',
        backgroundColor:'#903',
        color:'#ff3',
        fontSize:20,
        borderWidth: 3
    }
});

export default styles;