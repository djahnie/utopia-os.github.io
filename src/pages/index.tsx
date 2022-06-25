import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UtopiaOSFeatures from '@site/src/components/HomepageFeatures/utopia-os';
import UtopiaUIFeatures from '@site/src/components/HomepageFeatures/utopia-ui';
import UtopiaP2PFeatures from '@site/src/components/HomepageFeatures/utopia-p2p';
import DocutopiaFeatures from '@site/src/components/HomepageFeatures/docutopia';
import BrowserOnly from '@docusaurus/BrowserOnly';
import 'leaflet/dist/leaflet.css';
import styles from './index.module.css';
import Map from 'utopia-ui';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            const LibComponent = require('@site/src/components/map').Map;
            return <LibComponent />;
          }}
        </BrowserOnly>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Utopia OS is a Framework to build Apps for real life interaction">
      <HomepageHeader />
      <main>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Utopia OS</h1>
              <p className="hero__subtitle">the Framework to build Apps for Real Life Interaction</p>
              <div>
              <UtopiaOSFeatures />
                <button className="button button--secondary button--outline button--lg">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Utopia UI </h1>
              <p className="hero__subtitle">Reuseable UI Components for all kinds of communities</p>
              <div>
              <UtopiaUIFeatures />
                <button className="button button--secondary button--outline button--lg">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Utopia p2p</h1>
              <p className="hero__subtitle">Our vision is to run Utopia OS in a fully decentralized environment</p>
              <div>
              <UtopiaP2PFeatures />
                <button className="button button--secondary button--outline button--lg">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center">
            <div className="container">
              <h1 className="hero__title">Docutopia</h1>
              <p className="hero__subtitle">is the origin and the initial use case of Utopia OS. </p>
              <div>
              <DocutopiaFeatures />
                <button className="button button--secondary button--outline button--lg">
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
