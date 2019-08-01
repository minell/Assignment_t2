import React from "react"
import Header from "./Header"
    ""
class AvailableTrains extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Trains/>
            </div>
        )
    }
}

class Trains extends React.Component {
    render() {
        return (
            <div>
                <h2 align="center">
                    Available Trains
                </h2>

                <table align="center">
                    <tr>
                        <th>
                            Select Train
                        </th>
                        <th>
                            Train Name
                        </th>
                        <th>
                            Start Time
                        </th>
                        <th>
                            End Time
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>
                            Ruhunu Kumari
                        </td>
                        <td>
                            8.00
                        </td>
                        <td>
                            10.00
                        </td>
                        <td>
                            Rs.150.00
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"/>
                        </td>
                        <td>
                            Rajarata Kumari
                        </td>
                        <td>
                            12.00
                        </td>
                        <td>
                            14.00
                        </td>
                        <td>
                            Rs.150.00
                        </td>
                    </tr>
                </table>

                <h3 align="center">
                    <button>Submit</button>

                </h3>
            </div>
        )
    }
}

export default AvailableTrains