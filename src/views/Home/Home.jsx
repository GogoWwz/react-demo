import React from 'react'
import { Button } from "antd"
import homeClasses from './home.scss'
import Login from '../Login/Login'

class Home extends React.Component {
    render() {
        return (
            <div className={homeClasses['m-banner']}>
                <Login></Login>
            </div>
        )
    }
}

export default Home