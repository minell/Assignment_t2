import React from "react"
import Header from "./Header"

class MobileDetails extends React.Component{
    render() {
        return (
            <div>
                <Header/>
                <MobileForm/>
            </div>
        )
    }
}

class MobileForm extends React.Component{
    render() {
        return (
            <div>
                <h2 align="center">
                    Enter Mobile Phone Details
                </h2>

                <table align="center">
                    <tr>
                        <th>Mobile Phone Number :</th>
                        <td><input type="tel"/></td>
                        <td><input type="button" value="Request Pin"/></td>
                    </tr>
                    <tr>
                        <th>Four Digit No:</th>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>Amount:</th>
                        <td><input type="number" step="any"/></td>
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

export default MobileDetails