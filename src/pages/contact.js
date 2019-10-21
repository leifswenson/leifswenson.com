import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm/ContactForm"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default contact
