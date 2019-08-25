import React from 'react'
import Layout from '../layout/Layout'
import CreateComponent from '../components/create-component'
import {withRouter} from 'react-router'
const Create = () => <Layout>
<CreateComponent />

</Layout>

export default withRouter(Create)