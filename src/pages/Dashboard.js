import { Link } from 'react-router-dom'

export default function Dashboard({ stocks }) {

    return (
        <>

            <h1 className="home">Active Stocks</h1>

            <div className="bodyContainer">
                <table>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Price</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>

                        {stocks.map((stock) =>

                            <tr>
                                <td>  <Link className="links" to={`/stock/${stock.symbol}`}> {stock.name} </Link>  </td>
                                <td>{stock.lastPrice}</td>
                                <td>{stock.change}</td>
                            </tr>




                        )}
                    </tbody>
                </table>

            </div>

        </>
    );
}
// {/* <table >
// <tr>
//     <th>Company Name</th>
//     <th>Price</th>
//     <th>Change</th>
// </tr>
// {/* <tr> */}
// <td>
//     {stocks.map((stock) =>
//         <Link className="links" to={`/stock/${stock.symbol}`}> <h2>{stock.name}</h2> </Link>
//     )}
// </td>
// <td>
//     {stocks.map((stock) =>
//         <Link className="links" to={`/stock/${stock.symbol}`}> <h2>{stock.lastPrice}</h2> </Link>
//     )}
// </td>
// <td>
//     {stocks.map((stock) =>
//         <Link className="links" to={`/stock/${stock.symbol}`}> <h2>{stock.change}</h2> </Link>
//     )}
// </td>


// {/* </tr> */}
// </table> */}

