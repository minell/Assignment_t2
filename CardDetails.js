import React from "react"

import Header from "./Header"

class CardDetails extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <CardForm/>
            </div>
        )
    }

}

class CardForm extends React.Component{
    render() {
        return (
            <div>
                <h2 align="center">
                    Enter Card Details
                </h2>

                <table align="center">
                    <tr>
                        <th>Card holder's name:</th>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>Credit Card No:</th>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>Amount:</th>
                        <td><input type="number" step="any"/></td>
                    </tr>
                    <tr>
                        <th>CVC number:</th>
                        <td><input type="number" max="100" min="999"/></td>
                    </tr>


                </table>
                <h3 align="center">
                    <input type="button" value="Pay"/>
                        <button type="reset">Reset</button>
                </h3>
            </div>
        )
    }
}

export default CardDetails