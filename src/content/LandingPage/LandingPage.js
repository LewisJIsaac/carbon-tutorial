import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid">
      <div className="bx--grid bx--grid--full-width landing-page">
        <div className="bx--row landing-page__banner">
          <div className="bx--col-lg-16">
            <Breadcrumb noTrailingSlash>
              <BreadcrumbItem>
                <a href="/">Getting started</a>
              </BreadcrumbItem>
            </Breadcrumb>
            <h1 className="landing-page__heading">
              Understand Your DevOps Pathway
            </h1>
          </div>
        </div>

        <div className="bx--row landing-page__r2">
          <div className="bx--col bx--no-gutter">
            <Tabs {...props.tabs}>
              <Tab {...props.tab} label="About">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-md-4 bx--col-lg-7">
                      <h2 className="landing-page__subheading">
                        What is a Pathway?
                      </h2>
                      <p className="landing-page__p">
                        A career pathway is an organised approach to career
                        planning for anyone wanting to land a first role or to
                        improve skills for different or better role
                        opportunities.
                      </p>
                      <p className="landing-page__p">
                        Click on the individual roles in the top bar to find
                        requirements for pathways at each level.
                      </p>
                      <Button>Learn more</Button>
                    </div>
                    <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-8">
                      {/* <img
                    className="landing-page__illo"
                    src={`${process.env.PUBLIC_URL}/tab-illo.png`}
                    /> */}
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="Levels">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <p className="landing-page__p">Levels</p>
                    <div />
                    <p />
                    <br />
                    <p className="landing-page__p">
                      Use levels to assess your knowledge and find out what is
                      next to learn about. The levels span from 1 to 5. Level 1
                      is for Beginners, Level 3 are for Intermediates and Level
                      5 are for experts.
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="Modules">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--row landing-page__tab-content">
                    <div className="bx--col-lg-16">
                      Carbon provides styles and components in Vanilla, React,
                      Angular, and Vue for anyone building on the web.
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-4 bx--col-lg-4">
          <h3 className="landing-page__label">RHER Links</h3>
        </div>
        <div className="bx--col-md-4 bx--col-lg-4">RHER Links</div>
        <div className="bx--col-md-4 bx--col-lg-4">RHER Links</div>
      </div>
    </div>
  );
};
export default LandingPage;
