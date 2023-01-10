export default interface IProps{
    items: IFavoriteItem[];
    toggleFavorite: (id: string) => void;
};

export interface IFavoriteItemProps extends IFavoriteItem{
    toggleFavorite: (id: string) => void;
}

export interface IFavoriteItem {
    key: string;
    title: string;
    isFavorite: boolean;
}
