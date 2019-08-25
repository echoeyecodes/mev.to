webpackHotUpdate("static\\development\\pages\\create.js",{

/***/ "./components/create-component.js":
/*!****************************************!*\
  !*** ./components/create-component.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tag_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-field */ "./components/tag-field.js");

var _jsxFileName = "C:\\Users\\me\\hello\\components\\create-component.js";




class CreateComponent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "createTagField", evt => {
      evt.preventDefault();
      const {
        tags
      } = this.state;
      const obj = {
        tag: ''
      };
      tags.push(obj);
      this.setState({
        tags
      });
    });

    this.state = {
      tags: []
    };
  }

  render() {
    const style = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "50px auto",
      height: "100%",
      width: "80%"
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      style: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      style: {
        border: "1px #22303f solid",
        borderRadius: "3px",
        color: "black",
        height: "20px",
        padding: "5px"
      },
      type: "text",
      placeholder: "Title",
      name: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Content"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      style: {
        border: "1px #22303f solid",
        borderRadius: "3px",
        color: "black",
        height: "20px",
        minHeight: '100px',
        padding: "5px"
      },
      type: "text",
      placeholder: "Content (in Markdown)",
      name: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        marginTop: '20px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Tags:", this.state.tags.map(item => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tag_field__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: this.createTagField,
      style: {
        width: '118px',
        color: 'white',
        borderRadius: '3px',
        fontWeight: 'bold',
        cursor: 'pointer',
        border: '2px solid white',
        padding: '5px',
        margin: '10px',
        backgroundColor: '#00af81'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Add Tag"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
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
        lineNumber: 81
      },
      __self: this
    }, "POST")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CreateComponent);

/***/ })

})
//# sourceMappingURL=create.js.099709d65e97d0f9eed7.hot-update.js.map