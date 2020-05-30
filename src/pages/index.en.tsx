// import React from 'react';
// import IndexTemplate from '../components/Templates/IndexTemplate';
// import {graphql} from "gatsby";
//
// interface IProps {
//   data: any
// }
//
// const IndexPage: React.FC<IProps> = ({data}) => {
//   return (
//     <IndexTemplate
//       title={"Home"}
//       mainVisual={data.mainImage.childImageSharp.fixed}
//       scenes={data.allMarkdownRemark.edges}
//     />
//   );
// };
//
// export default IndexPage;
//
// export const query = graphql`
//   query($langKey: String!) {
//     # top page image
//     mainImage: file(relativePath: { eq: "about/main.jpg" }) {
//       childImageSharp {
//         fixed(height: 500) {
//           ...GatsbyImageSharpFixed_withWebp_tracedSVG
//         }
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___sceneId], order: ASC }, filter: {fields: {langKey: {eq: $langKey}}, frontmatter: {type: {eq: "scene"}}}) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             sceneId
//             icon {
//               childImageSharp {
//                 fixed(width: 440) {
//                   ...GatsbyImageSharpFixed_withWebp_tracedSVG
//                 }
//               }
//             }
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
