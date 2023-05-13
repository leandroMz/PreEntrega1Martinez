import 'bootstrap/dist/css/bootstrap.min.css';
import './MainContein.css'
import { MainCarrousel } from '../MainCarrousel/MainCarrousel';
import { MainProtectBuy } from '../MainProtectBuy/MainProtectBuy';
import { MainSelector } from '../MainSelector/MainSelector';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';

export const MainContain = () => {
    return (
        <div>
            <MainCarrousel/>
            <MainProtectBuy/>
            <ItemListContainer />
            <MainSelector />
        </div>
    )
}
