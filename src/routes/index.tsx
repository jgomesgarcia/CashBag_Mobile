import { NavigationContainer } from '@react-navigation/native';

import MainRoutes from "./Main.routes";
import TransactionRoutes from "./Transaction.routes";

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <MainRoutes />
            <TransactionRoutes />
        </NavigationContainer>
    )
}

export default Routes