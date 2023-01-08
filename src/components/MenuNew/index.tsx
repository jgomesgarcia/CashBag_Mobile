import React from "react";

import { Container } from "./styles";
import { FAB, Stack } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuNew: React.FC = () => {
    return (
        <Stack fill justify="end" items="center" spacing={10} border={10} borderColor="red">
            <FAB
                icon={props => <Icon name="home" {...props} />}
                variant="extended"
                color="primary"
                label="Transação"
            />
            <FAB
                icon={props => <Icon name="home" {...props} />}
                variant="extended"
                color="primary"
                label="Pagador"
            />
            <FAB
                icon={props => <Icon name="home" {...props} />}
                variant="extended"
                color="primary"
                label="Período"
            />
            <FAB
                icon={props => <Icon name="home" {...props} />}
                variant="extended"
                color="primary"
                label="Relatorio"
            />
        </Stack>
    )
}

export default MenuNew