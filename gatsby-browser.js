/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// export { default as wrapRootElement } from './src/old/apollo';
import React from "react"
import { ThemeProvider } from "./src/context/ThemeContext"
export const wrapRootElement = ({ element }) => (
		<ThemeProvider>{element}</ThemeProvider>
)
