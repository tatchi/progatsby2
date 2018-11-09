import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const ARCHIVE_QUERY = graphql`
  query AllArchives {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            slug
          }
        }
      }
      totalCount
    }
  }
`;

const Archive = ({ children }) => (
  <StaticQuery
    query={ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.frontmatter.slug}>
                <Link to={`/posts/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </>
    )}
  />
);

export default Archive;
