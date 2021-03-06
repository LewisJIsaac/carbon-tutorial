import React from 'react';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';

const TutorialHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName element={Link} to="/" prefix="IBM">
      DevOps Pathways
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/achitect">
        Architect
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/automationengineer">
        Automation Engineer
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/containermgmt">
        Container and Container Mgmt Engineer
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/automationengineer">
        Networking and Infrastructure Engineer
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/automationengineer">
        Security Engineer
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/automationengineer">
        Sys Admin
      </HeaderMenuItem>
      <HeaderMenuItem element={Link} to="/automationengineer">
        Technical PM / Scrum Master
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      {/* <HeaderGlobalAction aria-label="Notifications">
    <Notification20 />
  </HeaderGlobalAction> */}
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>{' '}
  </Header>
);

export default TutorialHeader;
