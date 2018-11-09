import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const POST_QUERY = graphql`
  query AllPosts {
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

const Posts = ({ children }) => (
  <StaticQuery
    query={POST_QUERY}
    render={({ allMarkdownRemark }) => (
      <Layout>
        <aside>
          <h3>Posts</h3>
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
      </Layout>
    )}
  />
);

export default Posts;
