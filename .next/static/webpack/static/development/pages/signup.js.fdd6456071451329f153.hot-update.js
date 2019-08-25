webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./components/sign-up.js":
/*!*******************************!*\
  !*** ./components/sign-up.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\me\\hello\\components\\sign-up.js";



class SignUp extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ImageUpload", evt => {
      var files = evt.target.files; // FileList object

      var reader = new FileReader(); // Closure to capture the file information.

      reader.onload = function (theFile) {
        return function (e) {
          document.getElementById('text').src = e.target.result;
        };
      }(files[0]); // Read in the image file as a data URL.


      reader.readAsDataURL(files[0]);
    });
  }

  render() {
    const style = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "50px auto",
      height: "100%",
      width: "50%"
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      id: "test",
      style: {
        borderRadius: "50%",
        margin: "10px auto"
      },
      src: "static/image.jpg",
      alt: "profilepicture",
      width: "80",
      height: "80",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      onChange: this.ImageUpload,
      type: "file",
      value: "",
      style: {
        width: "150px",
        margin: "10px auto",
        color: "black"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "First Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      style: {
        border: "1px #22303f solid",
        borderRadius: "3px",
        color: "black",
        height: "20px",
        padding: "5px"
      },
      type: "text",
      placeholder: "First Name",
      name: "firstname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Last Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      style: {
        border: "1px #22303f solid",
        borderRadius: "3px",
        color: "black",
        height: "20px",
        padding: "5px"
      },
      type: "text",
      placeholder: "Last Name",
      name: "lastname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Username"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      style: {
        border: "1px #22303f solid",
        borderRadius: "3px",
        color: "black",
        height: "20px",
        padding: "5px"
      },
      type: "text",
      placeholder: "Username",
      name: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      style: {
        border: "1px #22303f solid",
        borderRadius: "3px",
        color: "black",
        height: "20px",
        padding: "5px"
      },
      type: "text",
      placeholder: "Email",
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      style: {
        border: "1px #22303f solid",
        borderRadius: "3px",
        color: "black",
        height: "20px",
        padding: "5px"
      },
      type: "text",
      placeholder: "Password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      style: {
        border: "1px #22303f solid",
        borderRadius: "3px",
        color: "black",
        height: "20px",
        padding: "5px"
      },
      type: "text",
      placeholder: "Confirm Password",
      name: "password1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      style: {
        width: '118px',
        color: 'white',
        borderRadius: '3px',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: '2px solid white',
        padding: '5px',
        margin: '50px auto',
        backgroundColor: '#00af81'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        margin: '10px auto'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Already have an account? ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Login")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ })

})
//# sourceMappingURL=signup.js.fdd6456071451329f153.hot-update.js.map