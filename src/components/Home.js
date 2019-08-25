import React from 'react'
import Feed from './Feed'
import PanelLeft from './PanelLeft'
class Home extends React.Component{
        constructor(props){
            super(props)

            this.state={
                userId: 'cjzh2fur7jpka0b531w8lsjwu'
            }
        }
    componentDidMount(){
        const id = localStorage.getItem('auth-token-user')

        this.setState({
            userId: id
        })
    }
    render(){
        const style={
            display: 'grid',
            gridTemplateColumns: '25% 50% 25%',
            gridGap: '10px',
            marginLeft: '20px',
            marginRight: '20px'
        }
        return(
            <div className='root'>
            <div id='panel'>
            <PanelLeft />
            </div>
                <Feed id='feed'/>
                <style jsx>{
                    `
                    .root{
                        display: grid;
                        grid-template-columns: 25% 50% 25%;
                        grid-gap: 10px;
                        margin-left: 20px;
                        margin-right: 20px;
                    }

                    @media only screen and (max-width: 900px) {
                        .root{
                            display: block;
                        }
                        #panel{
                            display: none;
                        }
                    }
                    `
                }
                </style>
            </div>
        )
    }
}

export default Home