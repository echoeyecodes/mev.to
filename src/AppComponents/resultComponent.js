import React from "react"

class ResultComponent extends React.Component {
  render(props) {
    return (
      <div>
        <p style={{ margin: "0px", fontSize: "14px" }}>
          {this.props.results.option}
        </p>
        <div
          style={{
            width: "200px",
            borderRadius: "5px",
            backgroundColor: '#b19cd9',
            border: "1px grey solid",
            height: "40px",
            position: 'relative',
            marginBottom: "20px",
          }}
        >
        <p style={{position: 'absolute', left: '85px', color: 'white'}}> {this.props.results.value}%</p>
          <div
            style={{
              width: this.props.results.value + "%",
              borderRadius: "5px",
              color: "white",
              display: "flex",
              overflow: 'visible',
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#663399",
              height: "40px",
            }}
          >
           
          </div>
        </div>
      </div>
    )
  }
}

export default ResultComponent
