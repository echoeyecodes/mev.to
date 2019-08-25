import React from 'react'
import {Link} from 'react-router-dom'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import getMonth from '../utils'
class FeedItem extends React.Component{
    constructor(props){
        super(props)

        this.state={
            status: 'SAVE'
        }
    }

    showStatus = (data) =>{
        this.setState({
            status: 'SAVING'
        })
        console.log('action successful')
        this.setState({
            status: 'SAVED'
        })
    }

    render(props){
        const id = this.props.data.id
        const d = this.props.data.createdAt
        const m = d.substring(5,7)
        const day= d.substring(8, 10)
        const month= getMonth(m)
        const style={
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            border: '1px #22303f solid',
            marginBottom: '30px',
            marginTop: '20px',
            borderRadius: '5px',
            backgroundColor: '#141f2d',
        }
        const horizontal={
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            margin: '20px'
          
        }

        const horizontal1={
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'end',
            position: 'absolute',
            right: '20px',
        }
        return(
            <div style={style}>
            <Link style={{textDecoration: 'none'}} to={`/${this.props.meta.username}/${this.props.data.id}`}>
            <div style={horizontal}>
            <Link to={`/${this.props.meta.username}`}>
            <img style={{
                borderRadius: '50%',
            }} src={this.props.meta.profileImage} alt="text" width='60' height='60'/>
            </Link>
            <div className='hero'>
            <h1 id='title-sub'>{this.props.data.title}</h1> 
            <Link style={{textDecorationLine: 'none', marginTop: '20px'}} to={`/${this.props.meta.username}`}> <h3 id='name-sub'>{this.props.meta.fullName} ・ <span>{month} {day}</span></h3></Link>
            <p>{this.props.data.tags.map(item =><Link id='tags' style={{display: 'inline', fontWeight: 'normal'}} to={`/tags/${item}`}><span>#{item}</span></Link>)}</p>
            </div>
            </div>
            </Link>

            <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', position: 'relative', marginTop: '20px', marginLeft: '20px'}}>
             <img
              src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/reactions-stack-ee166e138ca182a567f74c986b6f810f670f4d199aca9c550cc7e6f49f34bd33.png"
              width="40"
              height="30"
              alt="hearts"
            />{" "}
            <p style={{ margin: "5px 10px" }}>{this.props.data.likes.length}</p>

            <img
              src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/emoji/emoji-one-bookmark-040f92162fa88c379d9d4e04bc5c192b1eb0b080d109dfaf3c9b1a60a1aeef0a.png" alt="sticker"
              width="30"
              height="30"
              alt="pins"
            />{" "}
            <p style={{ margin: "5px 10px" }}>{this.props.data.reading.length}</p>
             <div style={horizontal1}>
             <p>8 mins read</p>
             <Mutation mutation={ADD_READING_LIST} variables={{id}} onError={error => this.showStatus(error)} onCompleted={data => this.showStatus(data)}>
                {mutation => (
                  <button
                  onClick={mutation}
                    style={{
                      background: "#0d36ff",
                      color: "white",
                      border: "none",
                      cursor: 'pointer',
                      padding: "5px",
                      borderRadius: "3px",
                      marginLeft: "10px",
                    }}
                  >
                    {this.state.status}
                  </button>
                )}
              </Mutation>
             </div>
            </div>




            <style jsx>{
                    `
                    #title-sub{
                        font-size: 24px;
                    }
                    #name-sub{
                        font-size: 18px;
                    }
                    @media only screen and (max-width: 900px) {
                        #title-sub{
                            font-size: 20px
                        }
                        #name-sub{
                            font-size: 18px;
                            font-weight: normal
                        }
                        #tags{
                            font-size: 16px
                        }
                    }
                    `
                }
                </style>
        </div>
        )
    }
}
const ADD_READING_LIST = gql`
  mutation addReadingList($id: ID!) {
    addReadingList(id: $id) {
      id
    }
  }
`;

export default FeedItem