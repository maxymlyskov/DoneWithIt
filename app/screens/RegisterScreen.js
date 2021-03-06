import React, { useState } from 'react';
import { StyleSheet,  } from 'react-native';
import * as Yup from 'yup'
import authApi from '../api/auth'
import usersApi from '../api/users'
import useApi from '../hooks/useApi'
import ActivityIndicator from '../components/ActivityIndicator'



import Screen from '../components/Screen';
import{ AppFormField, AppForm, ErrorMessage, SubmitButton } from '../components/forms'
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})



function RegisterScreen() {
    const auth = useAuth()
    const registerApi = useApi(usersApi.register)
    const loginApi = useApi(authApi.login)
    const [error, setError] = useState()

const handleSubmit = async (userInfo) =>{
    const result = await registerApi.request(userInfo)

    if(!result.ok){
        if(result.data) setError(result.data.error)
        else{
        setError('An unexpected errror occured.')
        console.log(result)
    }
    return;
}
const {data: authToken} = await loginApi.request(
    userInfo.email,
    userInfo.password
);
    auth.logIn(authToken)
}

    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
        <Screen style={styles.container}>
            <AppForm initialValues={{name:'',email:'', password:''}} 
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}>
                <ErrorMessage visible={error} error={error}/>
                <AppFormField
            placeholder='Name'
            icon='account'
            name='name'
            autoCapitalize='none'
            autoCorrect={false}
            />
             <AppFormField
            placeholder='Email'
            icon='email'
            name='email'
            autoCapitalize='none'
            autoCorrect={false}
            />

           <AppFormField 
           placeholder='Password'
           icon='lock'
           name='password'
           autoCapitalize='none' 
           autoCorrect={false} 
           secureTextEntry/>

           <SubmitButton title='Register' />
        </AppForm>
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    logo:{
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
        width: 80,
        height: 80
    }
})

export default RegisterScreen;