/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { FAB, Icon } from '@rneui/themed';
import { Stack } from '@react-native-material/core';
import { Overlay } from '@rneui/base';
import { ERoutes } from '../../../routes';

const MenuNew: React.FC<any> = ({  }) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Icon
                name="plus"
                type="octicon"
                onPress={() => setVisible(true)}
                style={{
                    width: 60,
                    height: 60,
                    backgroundColor: '#414073',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 5000,
                }}
            />
            <Overlay isVisible={visible} onBackdropPress={() => setVisible(false)}>
                <Stack justify="end" items="center" spacing={10} style={{ backgroundColor: 'transparent' }}>
                    <FAB
                        icon={{ name: ERoutes.TransactionCreator}}
                        color="primary"
                        title="Transação"
                    />
                    <FAB
                        icon={{ name: ERoutes.PayerCreator }}
                        color="primary"
                        title="Favorecido"
                    />
                    <FAB
                        icon={{ name: ERoutes.CycleCreator }}
                        color="primary"
                        title="Ciclo"
                    />
                </Stack>
            </Overlay>
        </>

    );
};

export default MenuNew;
