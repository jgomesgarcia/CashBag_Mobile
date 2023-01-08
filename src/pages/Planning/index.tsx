import { Text } from '@react-native-material/core';
import React from 'react'

import { View, Button } from 'react-native';

const Planning: React.FC = ({ navigation }) => {
    return (
        <View>
            <Text>Planning</Text>

            <Button
                title="Press"
                onPress={() => navigation.navigate('Perfil2')}
            />
        </View>
    )
}

export default Planning