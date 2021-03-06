/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div 
        style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
              backgroundColor: `#000`,
            }}
        class="has-text-white"
      >
        <main class="has-text-white" style={{backgroundColor: `#000`}}>{children}</main>
          <div class="columns is-mobile is-centered">
            <footer
              style={{
                  marginTop: `2rem`,
                  backgroundColor: `#000`,
                }}
                class="footer has-text-white is-centered"
              >
                © {new Date().getFullYear()}, Built with
                {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
          </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
