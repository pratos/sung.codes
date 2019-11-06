/** @jsx jsx */
import { jsx } from "theme-ui"
// // https://github.com/gatsbyjs/gatsby/blob/master/examples/using-wordpress/src/layouts/index.js
import React from "react"

import { Container, Layout as ThemeLayout, Main } from "theme-ui"
import { Global, css } from "@emotion/core"

import Nav from "../components/Nav"

function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            margin: 0;
            padding: 0;
          }
        `}
      />

      <ThemeLayout>
        <Container
          // p={[1, 2, 3]}
          sx={{
            // backgroundColor: theme => theme.colors.background,
            // backgroundColor: "tomato",
            // padding: theme => theme.space[0],
            padding: [1, 3, 4, 5],
          }}
        >
          <Nav />
          <Main>{children} </Main>
        </Container>
      </ThemeLayout>
    </>
  )
}

export default Layout
