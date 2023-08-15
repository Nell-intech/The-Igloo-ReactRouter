import { useParams } from "react-router-dom";

export default function Stock({ stocks }){
    let { symbol } = useParams()
    let index = stocks.findIndex((item) =>{
        return item.symbol === symbol;
    })
    console.log(index)
    console.log({stocks})
    console.log({symbol})
    let symbolVal = stocks[index]
    console.log(symbolVal)
    return(
        <div>

             <h1 className="home">{symbolVal.name}</h1>

             {/* <p>The change in price : {symbolVal.change}</p>
             <p>The last price : {symbolVal.lastPrice}</p>
             <p>The Lowest Price : {symbolVal.low}</p>
             <p>The heighest price : {symbolVal.high}</p> */}


             <div className="bodyContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Price Change</th>
                            <th>Last Price</th>
                            <th>Lowest Price</th>
                            <th>Highest Price</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>{symbolVal.lastPrice}</td>
                                <td>{symbolVal.high}</td>
                                <td>{symbolVal.low}</td>
                                <td>{symbolVal.change}</td>
                            </tr>
                    </tbody>
                </table>
            </div>





        </div>
       
    );
    }