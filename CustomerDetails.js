import React from "react"
import Header from "./Header"

class CustomerDetails extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <CustomerForm/>
            </div>
        )
    }
}

class CustomerForm extends React.Component{
    render() {
        return (
            <div>
                <h2 align="center">
                    Enter Details </h2>

                <table align="center">
                    <tr>
                        <th>Name:</th>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <th>Address:</th>
                        <td><textarea name="" id="" cols="22" rows="5"></textarea></td>
                    </tr>
                    <tr>
                        <th>Telephone:</th>
                        <td><input type="number" max="9999999999" min="0111111111"/></td>
                    </tr>
                    <tr>
                        <th>Government Emplyees Enter NIC No to Get Discount</th>
                        <td><input type="text"/></td>
                    </tr>

                </table>
                <h3 align="center">
                    <input type="button" value="Pay via Card"/>
                        <input type="button" value="Pay via Mobile"/>
                </h3>

            </div>
        )
    }
}

export default CustomerDetails