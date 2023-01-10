import { Flex, Text, useStyles } from '@react-native-material/core';
import React from 'react';
import { Icon } from '@rneui/themed';
import IProps, { IFavoriteItemProps } from './types';
import { StyleProp, ViewProps, TextProps } from 'react-native';

const FavoriteItem: React.FC<IFavoriteItemProps> = ({ toggleFavorite, key, isFavorite, title }) => {
    return (
        <Flex direction="row" items='center' style={{
            padding: 5,
        }}>
            <Icon
                name={isFavorite ? 'star' : 'staro'}
                size={25}
                color="#ffd900"
                type="antdesign"
                onPress={() => toggleFavorite(key)}
            />
            <Flex fill direction="row">
                <Text
                    style={{
                        paddingHorizontal: 10,
                        fontSize: 20,
                    }}                
                >{title}</Text>
            </Flex>
            <Icon
                size={25}
                name="arrow-forward-ios"
                type="material"
                onPress={() => toggleFavorite(key)}
            />

        </Flex>
    );
};


const FavoriteList: React.FC<IProps> = ({ items, toggleFavorite }) => {
    return (
        <Flex>
            {
             items.map((item) => (<FavoriteItem toggleFavorite={toggleFavorite} {...item}/>))
            }
        </Flex>
    );
};

export default FavoriteList;
