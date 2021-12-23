import type { NextPage } from "next";
import { useWineData } from '../../hooks/useWineData';
import { Wine } from "../../types/Wine";

const RedWinePage: NextPage = () => {
    const { data, error} = useWineData('reds');

    if(error) return <div>Failed to loading...</div>
    if(!data) return <div>...Loading</div>

    return(
        <div>
            <h1>red Wines</h1>
            <main>
                {data.map((wineData: Wine) => {
                    const  {id, wine, winery} = wineData;
                    return (
                        <div key={`reds-wine-list-${id}`}>
                            <h1>{wine}</h1>
                            <p>{winery}</p>
                        </div>
                    )
                })}
            </main>         
        </div>
    )
}

export default RedWinePage;