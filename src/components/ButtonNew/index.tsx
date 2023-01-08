import React from "react";
import { Container } from "./styles";
import  Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonNew: React.FC<any> = ({focused, size}) => {
    return (
        <Container focused={focused}>
            <Icon name="plus" color={focused ? "#fff" : "#ddd" } size={size} />
        </Container>
    )
}

export default ButtonNew