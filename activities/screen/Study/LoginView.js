import React, { Component } from 'react';

import  firebase from 'react-native-firebase';

import{
    View,
    StyleSheet,
    TextInput,
    Text,
    Image,
    Button,
    Modal,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';


export default class LoginView extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            userName:'',
            email:'',
            pwd:'',
            loggedInUser:null,
            confirmPwd:'',
            loginEmail:'',
            loginPwd:'',
            modalVisible:false,
            signUpModalVisibility:false,
            isLoading:false
        }
        this.onModalClose = this.onModalClose.bind(this);
        this.onModalOpen = this.onModalOpen.bind(this);
        this.itemRef=firebase.database().ref()

        // this.onSignUpModalOpen = this.onSignUpModalOpen.bind(this)
    }


    onRegister = () =>
    {
        if(this.state.pwd==this.state.confirmPwd)
        {
            this.setState({
                isLoading:true
            });
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pwd)
                .then((user) => {

                    this.itemRef.child(user.uid).set({
                        userName:this.state.userName,
                        password:this.state.pwd
                    })
                    this.onSignupModalClose()

                    // If you need to do anything with the user, do it here
                    // The user will be logged in automatically by the
                    // `onAuthStateChanged` listener we set up in App.js earlier
                })
                .catch((error) => {
                    const { code, message } = error;
                    // For details of error codes, see the docs
                    // The message contains the default Firebase string
                    // representation of the error
                });
        }
        else
        {
            alert("Password not matching with confirm Password");

        }
    }
    renderSignupModal()
    {
        console.log("signUpModal");
        const spinner=this.state.isLoading ? <ActivityIndicator style={{alignSelf:'center',  position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0}} size='large'/> : null;
        return(
            <Modal visible={this.state.signUpModalVisibility} animationType="slide" onRequestClose={this.onSignupModalClose}>
                <View style={styles.container}>
                    <View style={{flexDirection: 'row', alignItems:'center' ,backgroundColor:'#D3D3D3', height:40}}>
                        <Text style={{flexGrow:1,color:'#FF0000',fontSize:18,fontWeight:'bold'}}>Create New Account</Text>
                        <TouchableOpacity
                            onPress={this.onSignupModalClose} style={{paddingRight:5}}>
                            <Image source={{uri:"https://cdn.icon-icons.com/icons2/249/PNG/256/Close_2_26986.png"}} style={{width:25,height:25}}/>
                        </TouchableOpacity>


                    </View>
                    <TextInput   style={styles.input} placeholder='User Name'   onChangeText={(text)=>{
                        this.setState({
                            userName:text
                        })
                    }}/>
                    <TextInput  style={styles.input} placeholder='Email'  onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })
                    }}/>
                    <TextInput  style={styles.input} placeholder='Password'  secureTextEntry={true} onChangeText={(text)=>{
                        this.setState({
                            pwd:text
                        });
                    }}/>
                    <TextInput  style={styles.input} placeholder='Confirm Password'  secureTextEntry={true} onChangeText={(text)=>{
                        this.setState({
                            confirmPwd:text
                        });
                    }}/>


                    <View style={{alignSelf:'stretch', backgroundColor:'#FF0000', marginTop:15}} >
                        <Button title='Sign Up' color='#FFFFFF' onPress={this.onRegister} style={{fontSize:25,fontWeight:'bold'}}></Button>
                    </View>
                    {spinner}
                </View>
            </Modal>
        );
    }
    renderModal()
    {

        return(
            <Modal visible={this.state.modalVisible} animationType="slide" onRequestClose={this.onModalClose}>
                <View style={styles.modalContent}>
                    <Text style={{flexGrow:1}}>Welcome {this.state.loggedInUser?this.state.loggedInUser:null}</Text>
                    <TouchableOpacity
                        onPress={this.onModalClose}
                        style={styles.closeButton}
                    >
                        <Text>Close</Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        );
    }
    onModalClose(){
        this.setState({
            modalVisible: false
        });
        // this.state={
        //   modalVisible:false
        // }
    }
    onSignupModalClose=()=>{
        this.setState({
            signUpModalVisibility:false,
            isLoading:false
        });
    }
    onSignUpModalOpen=() =>{
        this.setState({
            signUpModalVisibility:true
        });
    }
    onModalOpen() {
        this.setState({
            modalVisible: true
        });
// this.state={
//   modalVisible:true
// }
    }

    _loginClicked=()=>{

        if((this.state.loginEmail!=null || this.state.loginEmail!="") && (this.state.loginPwd!=null || this.state.loginPwd!=""))
        {
            firebase.auth().signInWithEmailAndPassword(this.state.loginEmail,this.state.loginPwd).then((currentUser)=>
            {
                this.itemRef.child(currentUser.uid).child("userName").on('value',(dataSnapshot)=>{
                    console.log("before processing name from server:"+dataSnapshot);
                    if(dataSnapshot && dataSnapshot.val())
                    {
                        console.log("name from server:"+dataSnapshot.val());
                        this.setState({
                            loggedInUser:dataSnapshot.val()
                        });
                    }
                });
                this.onModalOpen()
            }).catch((error)=>{
                alert("Login failed due to incorrect credentials. "+error.message);
            })
        }
        else {
            alert("Please fill the credentials");
        }

    };


    render()
    {

        //RNFirebase core module was not found natively on Android,ensure you have cor
        return(

            <View style={styles.container}>
                <Image source={{uri:'https://cdn.icon-icons.com/icons2/368/PNG/128/Login_37128.png'}} style={styles.image}/>
                <View style={styles.innerContainer}>
                    <Text style={styles.textClass}>Email         :</Text>
                    <TextInput placeholder='Email' style={{flexGrow : 1}} onChangeText={(text)=>{
                        this.setState({
                            loginEmail:text
                        });
                    }}/>
                </View>

                <View style={styles.innerContainer}>
                    <Text style={styles.textClass} >Password  :</Text>
                    <TextInput  placeholder='Password' style={{flexGrow : 1}} secureTextEntry={true} onChangeText={(text)=>{
                        this.setState({
                            loginPwd:text
                        });
                    }}/>
                </View>

                <View style={{alignSelf:'stretch', backgroundColor:'blue',marginTop:15}} >
                    <Button title='Login' color='#FFFFFF' onPress={this._loginClicked}/>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'flex-start',alignItems:'center', margin:10}} >
                    <Text >Don&#39;t have account?</Text>
                    <Button title='Sign up now' color='#0000FF' onPress={this.onSignUpModalOpen}/>
                </View>
                {this.renderModal()}
                {
                    this.renderSignupModal()
                }
            </View>
        );
    }
}

const styles=StyleSheet.create(
    {
        container:
            {
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginTop:65,
                padding:15,

                alignItems:'flex-start'
            },
        innerContainer:{
            marginTop:15,
            flexDirection: 'row',
            justifyContent: 'center',

            alignItems:'flex-start'
        },
        input: {
            marginTop: 10,
            flexGrow:1,
            height:35,
            borderColor: '#7a42f4',
            alignSelf:'stretch',
            borderWidth: 1
        },
        textClass:{
            alignSelf:'flex-start'
        },
        verticalLayeout:{
            flexGrow:1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems:'flex-start'

        },
        login:{
            textAlign: 'center',
            color:'#0000ff',
            height:150
        },
        image:
            {
                alignSelf:'center',
                width:50,
                height:70
            },
        modalContent: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems:'flex-start',
            paddingTop: 20
        }
    });