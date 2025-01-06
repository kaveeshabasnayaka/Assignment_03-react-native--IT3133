import { Button, TextInput } from 'react-native-paper';
import { View } from 'react-native';


export default function Login(){
    return (
        <>
            <View>
                <Image source={require('..assets/uovlogo.png')} />

                <Text>Student Login</Text>


                <View>
                    <TextInput
                        mode='outlined'
                        label={username} />

                    <TextInput
                        mode='outlined'
                        label={password} />

                    <Button mode='contained' onPress={handleLogin}>
                        Login
                        </Button> 
                </View>


            </View>

        </>
    )
}