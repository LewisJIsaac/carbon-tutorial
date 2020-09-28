import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/Architect';
import AutomationPage from './content/AutomationEngineer';
import ContainerMgmtPage from './content/ContainerMgmt';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/achitect" component={RepoPage} />
            <Route path="/automationengineer" component={AutomationPage} />
            <Route path="/containermgmt" component={ContainerMgmtPage} />
          </Switch>
          {/* <Button>Button</Button> */}
        </Content>
      </>
    );
  }
}

export default App;
