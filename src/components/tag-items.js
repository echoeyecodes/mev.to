import React from 'react'
import {Link} from 'react-router-dom'
const TagItems = (props) => <Link style={{textDecorationLine: 'none', fontSize: '18px', display: 'block', marginTop: '10px'}}>{props.tag}</Link>

export default TagItems