import React from 'react';
import TextBox from 'components/layout/TextBox';
import { List, ListItem, Container } from '@material-ui/core';
import content from 'components/contents';

import Profile from 'components/layout/Profile';

export default class PortfolioView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="portfolio-view">
        <Profile />
        <List>
          <ListItem>
            <TextBox title="Education" content={<content.EducationContent lang="KR" />} />
          </ListItem>
          <ListItem>
            <TextBox title="Experiences" content={<content.ExperienceContent lang="KR" />} />
          </ListItem>
          <ListItem>
            <TextBox title="Projects" content={<content.ProjectContent lang="KR" />} />
          </ListItem>
          <ListItem>
            <TextBox title="Skills" content={<content.SkillContent lang="KR" />} />
          </ListItem>
        </List>
      </Container>
    );
  }
}
