import React from "react"

class Header extends React.Component{

    render() {
        return (
            <div className="nav">
                <ul>
                    <li className="home"><a href="H">Home</a></li>
                    <li className="about"><a href="#">About</a></li>
                    <li className="contact"><a href="#">Contact</a></li>
                </ul>
            </div>

        )
    }

}
 export default Header