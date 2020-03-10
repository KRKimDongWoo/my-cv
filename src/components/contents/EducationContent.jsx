import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';

const getProps = (props) => ({
  lang: props.lang,
});

const EducationContentEN = () => (
  <List>
    <ListItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography variant="h5"> Seoul National University </Typography>
      <List>
        <ListItem>
          <Typography variant="body1">
            Computer Science and Engineering (Mar. 2017 ~)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            Business Administration (Sep. 2019 ~)
          </Typography>
        </ListItem>
      </List>
    </ListItem>
  </List>
);

const EducationContentKR = () => (
  <List>
    <ListItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography variant="h5"> 서울대학교 </Typography>
      <List>
        <ListItem>
          <Typography variant="body1">
            컴퓨터공학부 주전공 (Mar. 2017 ~)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="body1">
            경영학부 복수전공 (Sep. 2019 ~)
          </Typography>
        </ListItem>
      </List>
    </ListItem>
  </List>
);

const EducationContent = (props) => {
  const { lang } = getProps(props);

  switch (lang) {
    case 'KR':
      return EducationContentKR();
    case 'EN':
      return EducationContentEN();
    default:
      return null;
  }
};

export default EducationContent;
