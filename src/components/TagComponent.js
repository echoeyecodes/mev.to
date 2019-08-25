import React from "react";
import FeedItem from "./FeedItem";
class TagComponent extends React.Component {
  render(props) {
    const tag = this.props.tag;
    return (
      <div
        style={{
          display: "grid",
          marginTop: "80px",
          gridTemplateColumns: "25% 50% 25%"
        }}
      >
        <div />
        <div>
       {this.props.data.filter(item => {
           let valid = false
           for(let i=0; i<item.tags.length; i++){
               if(item.tags[i] === tag){
                   valid=true
               }
           }
           return valid
       }).map(item => <FeedItem data={item} meta={item.postedBy}/>)}
        </div>
      </div>
    );
  }
}

export default TagComponent;
