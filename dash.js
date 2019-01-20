import React from 'react'
import {AppRegistry, Text, View, Button} from 'react-native'
//import Header from './src/components/common/header';
const CALL_OUT_URL = "https://calloutapp-229103.appspot.com/call" 

async function sms () {
    // json should be: {phone:5179747030, password: password, calltext:text}
    // post request
    try {
        let response = await fetch(CALL_OUT_URL,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'phone':'5179747030', 'password': 'password', 'calltext':'text'})

        })
        //let responseJson = await response.json()
        //return responseJson.result;
        return "Texted"
    } catch (error) {
        console.error('Error is ' + error)
    }

}

async function call() {
    // json should be: {phone:5179747030, password: password, calltext:call}
    // post request
    try {
        let response = await fetch(CALL_OUT_URL,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'phone':'5179747030', 'password': 'password', 'calltext':'call'})

        })
        //let responseJson = await response.json()
        //return responseJson.result;
        return "Called"
    } catch (error) {
        console.error('Error is ' + error)
    }


}

const Dash = () => {
    return (
        <View>
            <Button
                onPress={call}
                title="Call"
                color="#841584"
                accessibilityLabel="Call yourself with this button"
            />
            <Button
                onPress={sms}
                //style={{marginTop: 60}}
                title="SMS"
                color="#841584"
                accessibilityLabel="Sms yourself with this button"
            />
        </View>
    )

}
const styles = {
    buttonStyle: {
        
    }
}

export default Dash