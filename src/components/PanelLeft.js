import React from 'react'
import {Link} from 'react-router-dom'
import TagItems from './tag-items'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
class PanelLeft extends React.Component{
    render(props){
        const style={
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '80px',
            borderRadius: '5px',
            border: '1px #22303f solid',
            backgroundColor: '#141f2d',
            padding: '5px'
        }

        const style1={
            borderRadius: '5px',
            border: '1px #22303f solid',
            backgroundColor: '#141f2d',
            padding: '5px 10px',
            marginTop: '20px'
        }
        return(
            <Query query={USER_QUERY}>
                {({data, loading, error}) =>{
                    if(error) return <div>Couldn't retrieve data</div>
                    if(loading) return <div>Fecthing data</div>

                    const info = data.currentUser

                    return(
                        <main style={{marginRight: '20px'}}>
                       
                       <Link to={`/${info.username}`}>
                         <div style={style}>
                            <img style={{borderRadius: '50%', margin: '0px 10px'}} width='70px' height='70px' src={info.profileImage} alt = 'dp' />
                            <div id='hero' style={{margin: '0px 10px'}}>
                            <h3>{info.fullName}</h3>
                            <p>@{info.username}</p>
                            </div>     
                        </div>
                        </Link>
        
        
                        <div style={style1}>
                            <p style={{textDecorationLine: 'underline'}}>navigation</p>
                            <Link to='/'>
                            <span><img width='20' height='20' src='https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-bookmark-040f92162fa88c379d9d4e04bc5c192b1eb0b080d109dfaf3c9b1a60a1aeef0a.png' alt='sticker' /></span>Reading List ({info.readingList.length})
                            </Link>
        
                            <Link to='/'>
                            <span><img width='20' height='20' src='https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-headphones-6b1a0ef5579b48ec5dc8faafbaceab286f96304fbc96dbc9701a37fb432a28f4.png' alt='sticker' /></span>Memes
                            </Link>
        
                            <Link to='/'>
                           <span><img width='20' height='20' src='https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-videocamera-c3987b4d9cb498c748b54af19e7a3089f8619cbf3b59f1689cdad75264c6182e.png' alt='sticker' /></span>Videos
                            </Link>
        
        
                        <p style={{textDecorationLine: 'underline'}}>tags</p>
                        <div>
                            <TagItems tag='#javascript' />
                            <TagItems tag='#scala' />
                            <TagItems tag='#webdev' />
                            <TagItems tag='#mvc' />
                            <TagItems tag='#react' />
                            <TagItems tag='#go-lang' />
                        </div>
                        </div>
        
                        <style jsx>{`
                        #hero *{
                            margin: 5px
                        }
                        a{
                            text-decoration: none;
                            display: block;
                            margin-top: 20px;
                            font-size: 20px
                        }
                        a span img{
                            margin-right: 10px
                        }
                        `}</style>
                    </main>
                    )
                }}
            </Query>
         
        )
    }
}

const USER_QUERY= gql `
{
    currentUser{
        id
        profileImage
        fullName
        username
        readingList{
            id
        }
    }
}
`
export default PanelLeft