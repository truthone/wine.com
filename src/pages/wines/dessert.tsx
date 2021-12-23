import type { NextPage } from "next";
import { useWineData } from '../../hooks/useWineData';
import { Wine } from "../../types/Wine";

const DessertWinePage: NextPage = () => {
    const { data, error} = useWineData('dessert');

    if(error) return <div>Failed to loading...</div>
    if(!data) return <div>...Loading</div>

    return(
        <div>
            <h1>dessert Wines</h1>
            <main>
                {data.map((wineData: Wine) => {
                    const  {id, wine, winery} = wineData;
                    return (
                        <div key={`dessert-wine-list-${id}`}>
                            <h1>{wine}</h1>
                            <p>{winery}</p>
                        </div>
                    )
                })}
            </main>         
        </div>
    )
}

export default DessertWinePage;