import { Flex, IconButton, TextInput } from '@react-native-material/core';
import { SearchBar } from '@rneui/base';
import React from 'react';
import FavoriteList from '../../components/FavoriteList';
import { IFavoriteItem } from '../../components/FavoriteList/types';
import { useState } from 'react';

const contatos: IFavoriteItem[]=[
    {
        isFavorite: true,
        key: "0",
        title: "Eu",
    },
    {
        isFavorite: true,
        key: "1",
        title: "Marina",
    },
    {
        isFavorite: false,
        key: "2",
        title: "Mariany",
    },
    {
        isFavorite: false,
        key: "3",
        title: "Pedro",
    },
]

const PayerList: React.FC<any> = () => {

    const [favorecidos, setFavorecidos] = useState(contatos);
    
    
    return (
        <Flex fill>
            <SearchBar 
                platform="android"
            />
            <FavoriteList
                items={favorecidos}
                toggleFavorite={() => {}}
            />
        </Flex>
    );
};

export default PayerList;
