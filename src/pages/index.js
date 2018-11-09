import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <ul>
      <li>
        <Link to="/company/team">Team</Link>
      </li>
      <li>
        <Link to="/posts/">Posts</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
