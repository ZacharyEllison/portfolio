import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <iframe title="404" src="https://giphy.com/embed/XqL0uC2RUx9Hq" width="480" height="409" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/movie-50k-cloudy-with-a-chance-of-meatballs-XqL0uC2RUx9Hq">via GIPHY</a></p>
    <p>Whatever you're looking for doesn't exist!</p>
  </Layout>
)

export default NotFoundPage
