import {StyleSheet} from 'react-native';
import {width,height} from "../../../../global/dictStyle";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    child: {
        height: height * 0.5,
        width,
        justifyContent: 'center'
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center'
    },
    carousel:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:50}
});

export default styles;