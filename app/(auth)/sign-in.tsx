import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const signIn = () => {
    return (
        <View>
            <Text></Text>
            <Button title="Sign Up" onPress={() => router.push("/sign-up")}></Button>
        </View>
    )
}

export default signIn;