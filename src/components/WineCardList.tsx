import { useWineData } from '../hooks/useWineData';
import { Wine } from '../types/Wine';
import { WineCard } from './WineCard';

interface wineCardListProps {
    name: string
}

export const WineCardList = ({ name }: wineCardListProps) => {
    const { data, error} = useWineData('port');
    
    if(error) return <div>Failed to loading...</div>
    if(!data) return <div>...Loading</div>

    return(
        <div>
            <h1>Port Wines</h1>
            <main>
                {data.map((wineData: Wine) => {
                    const  {id, wine, winery} = wineData;
                    return (
                        <WineCard
                            key={ `${name}-wine-list-${wineData.id}`}
                            wineData = {wineData};
                        />
                    )
                })}
            </main>         
        </div>
    )
}