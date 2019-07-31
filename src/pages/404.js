import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <iframe title="404" src="https://giphy.com/embed/3o7TKLIJ9UbAPsF9WU" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/seeso-3o7TKLIJ9UbAPsF9WU">via GIPHY</a></p>
    <p>Whatever you're looking for doesn't exist!</p>
  </Layout>
)

export default NotFoundPage
