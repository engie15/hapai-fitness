import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div class="container">
      <div class="columns is-mobile has-text-white" style={{backgroundColor: `#000`}}>
        <div class="column" style={{backgroundColor: `#000`}} ><SEO title="Home" /></div>
      </div>
      <div class="level is-mobile has-text-white" style={{backgroundColor: `#000`}}>
        <div class="level-item" style={{backgroundColor: `#000`}}>
          <StaticImage
            src="../images/HapaiFitnessNoOutline.png"
            width={400}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Hāpai Fitness"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
    </div>
    <div class="section" style={{backgroundColor: `#000`}}>
      <div class="container">
        <div class="columns is-mobile has-text-white">
          <div class="column is-size-3 has-text-centered">
            <h1>Nau mai, haere mai ki Hāpai Fitness</h1>
            <p>Our website is coming...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="level is-mobile has-text-white">
        <div class="level-item has-text-centered">
            <a href="https://www.facebook.com/HapaiFitness">
              <StaticImage
                src="../images/f_logo_RGB-White_58.png"
                width={100}
                quality={35}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Hāpai Fitness"
                style={{ marginBottom: `1.45rem` }}
              />
            </a>
        </div>
        <div class="level-item has-text-centered">
            <a href="https://www.instagram.com/hapaifitness/">
              <StaticImage
                src="../images/instagram-64.png"
                width={100}
                quality={35}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Hāpai Fitness"
                style={{ marginBottom: `1.45rem` }}
              />
            </a>
        </div>
      </div>
    </div>    
  </Layout>
)

export default IndexPage
