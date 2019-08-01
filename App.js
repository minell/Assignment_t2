import React from "react"
import Header from "./Header"
import train2 from "./images/train2.jpg"


class App extends React.Component{

    render() {
        return (
            <div>
            <Header/>
            <Cover/>
            <FormBookTicket/>
            </div>
        )
    }

}

class Cover extends React.Component{
    render() {
        return(
            <img src={train2} className="cover"/>
        )
    }
}

class FormBookTicket extends React.Component{
    constructor() {
        super()
        this.state = {
            city1: "kurunegala",
            city2:"kurunegala"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const name = event.target
        this.setState({[name]:value()})
    }

    render() {
        return(
            <div>
                <h2 align="center">Book Your Ticket</h2>
                <form>
                    <table align="center">
                        <tr>
                            <th>From:</th>
                            <td>
                                <select
                                    value={this.state.city1}
                                    onChange={this.handleChange}
                                    name="city1"
                                >
                                    <option value="kurunegala">Kurunegala</option>
                                    <option value="kandy">Kandy</option>
                                    <option value="colombo">Colombo</option>
                                    <option value="gampaha">Gampaha</option>
                                </select>
                            </td>
                            <th>To:</th>
                            <td>
                                <select
                                    value={this.state.city2}
                                    onChange={this.handleChange}
                                    name="city2">
                                    <option value="kurunegala">Kurunegala</option>
                                    <option value="kandy">Kandy</option>
                                    <option value="colombo">Colombo</option>
                                    <option value="gampaha">Gampaha</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Date:</th>
                            <td><input type="Date"/></td>
                        </tr>
                        <tr>
                            <th>
                                Number of tickets:
                            </th>
                            <td>
                                <input type="number" min="1" max="50"/>
                            </td>
                        </tr>
                    </table>

                    <h3 align="center">

                            <button>Submit</button>

                    </h3>
                </form>

            </div>
        )
    }
}

export default App
