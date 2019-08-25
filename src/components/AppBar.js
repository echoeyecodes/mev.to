import React from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";
class AppBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: ""
    };
  }
  render() {
    return (
      <nav
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          backgroundColor: "#1c2938",
          padding: "5px",
          position: "fixed",
          zIndex: "1",
          top: "0px",
          width: "100%"
        }}
      >
        <Link style={{ margin: "0px", padding: "0px" }} to="/">
          <svg
            style={{
              backgroundColor: "#0a0a0a",
              fill: "white",
              padding: "10px",
              borderRadius: "3px",
              marginLeft: "50px",
              cursor: "pointer"
            }}
            xmlns="http://www.w3.org/2000/svg"
            version="1"
            width="40"
            height="15"
            viewBox="0 0 132.000000 65.000000"
            role="img"
            aria-labelledby="a2quzjq6uose4tql5yswi1u5atil8on6"
            class="logo"
          >
            <title id="a2quzjq6uose4tql5yswi1u5atil8on6">App logo</title>
            <path d="M0 33v32h11.3c12.5 0 17.7-1.6 21.5-6.5 3.8-4.8 4.4-9 4-28-.3-16.8-.5-18.2-2.7-21.8C30.3 2.5 26.1 1 12 1H0v32zm23.1-19.1c2.3 1.9 2.4 2.3 2.4 18.5 0 15.7-.1 16.7-2.2 18.8-1.7 1.6-3.5 2.2-7 2.2l-4.8.1-.3-20.8L11 12h4.9c3.3 0 5.6.6 7.2 1.9zM46.1 3.6c-2 2.6-2.1 3.9-2.1 29.6v26.9l2.5 2.4c2.3 2.4 2.9 2.5 16 2.5H76V54.1l-10.2-.3-10.3-.3v-15l6.3-.3 6.2-.3V27H55V12h21V1H62.1c-13.9 0-14 0-16 2.6zM87 15.2c2.1 7.9 5.5 20.8 7.6 28.8 3.2 12.3 4.3 15 7 17.7 1.9 2 4.2 3.3 5.7 3.3 3.1 0 7.1-3.1 8.5-6.7 1-2.6 15.2-55.6 15.2-56.8 0-.3-2.8-.5-6.2-.3l-6.3.3-5.6 21.5c-3.5 13.6-5.8 20.8-6.2 19.5C105.9 40 96 1.9 96 1.4c0-.2-2.9-.4-6.4-.4h-6.4L87 15.2z" />
          </svg>
        </Link>
        <input
          style={{
            borderRadius: "3px",
            padding: "3px",
            color: "#fff",
            backgroundColor: "#424a54",
            border: "none"
          }}
          type="text"
          placeholder="search"
        />

        <div
          id="top-bar-misc"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Link to="/create">
            <button
              style={{
                width: "118px",
                color: "white",
                borderRadius: "3px",
                fontWeight: "bold",
                cursor: "pointer",
                border: "2px solid white",
                backgroundColor: "#00af81"
              }}
            >
              WRITE A POST
            </button>
          </Link>

          <Link to="/">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.834 47.834"
              role="img"
              aria-labelledby="artmr9lwjcj3inxn6cxnzhf1abz5bt4f"
              width="30"
              height="30"
            >
              <title id="artmr9lwjcj3inxn6cxnzhf1abz5bt4f">Notifications</title>
              <path d="M46.878 41.834H.956L.96 40.83c.022-4.066 2.87-7.55 6.76-8.438V20.697c0-8.93 7.265-16.197 16.196-16.197 8.932 0 16.198 7.266 16.198 16.197v11.695c3.89.89 6.737 4.372 6.76 8.437l.004 1zm-43.836-2h41.75c-.458-2.908-2.804-5.24-5.8-5.61l-.878-.107v-13.42c0-7.828-6.37-14.197-14.198-14.197S9.72 12.87 9.72 20.697v13.42l-.878.106c-2.997.37-5.342 2.702-5.8 5.61z" />
              <path d="M21.125 5.988h-2V4.792C19.125 2.15 21.275 0 23.917 0s4.79 2.15 4.79 4.792v1.176h-2V4.792c0-1.54-1.25-2.792-2.79-2.792s-2.792 1.253-2.792 2.792v1.196zm2.778 41.846c-3.94 0-7.375-2.8-8.164-6.656l1.954-.4c.6 2.93 3.21 5.057 6.205 5.057 3.06 0 5.677-2.18 6.23-5.18l1.966.36c-.725 3.952-4.17 6.82-8.195 6.82zM8.72 32.23h3.682v2H8.72zm9.447 0h20.947v2H18.167z" />
            </svg>

            <Query query={USER_QUERY}>
              {({ data, loading, error }) => {
                if (loading) return <button>Fetching</button>;
                if (error) return <button>Could'nt fetch data</button>;

                return (
                  <Link style={{display:'inline'}} to={`/${data.currentUser.username}`}>
                    <img
                      style={{
                        borderRadius: "50%"
                      }}
                      width="30"
                      height="30"
                      src={data.currentUser.profileImage}
                      alt="dp"
                    />
                  </Link>
                );
              }}
            </Query>
          </Link>
        </div>
      </nav>
    );
  }
}

const USER_QUERY = gql`
  {
    currentUser {
      id
      profileImage
      username
    }
  }
`;

export default AppBar;
