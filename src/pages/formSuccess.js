import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Success from "../components/Success/Success"

const formSuccess = () => (
  <Layout>
    <SEO title="Form Success" />
    <div>
      <Success />
    </div>
  </Layout>
)

export default formSuccess
