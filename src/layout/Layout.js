import React from 'react'
import AppBar from '../components/AppBar'
class Layout extends React.Component{
    render(props){
        return(
            <div>
                <AppBar />
                {this.props.children}
            </div>
        )
    }
}

export default Layout