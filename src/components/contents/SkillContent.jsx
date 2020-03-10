import React from 'react';
import {
  List,
  ListSubheader,
  Typography,
  ListItem,
} from '@material-ui/core';

const getProps = (props) => ({
  lang: props.lang,
});

const SkillContentKR = () => (
  <List>
    <ListSubheader style={{ color: 'black' }}>
      <Typography variant="h5"> 이수 강좌 </Typography>
    </ListSubheader>
    <ListItem>
      <List>
        <ListItem> 컴퓨터의 개념 및 실습 (A0)</ListItem>
        <ListItem> 논리설계 (A-) </ListItem>
        <ListItem> 컴퓨터구조 (A+) </ListItem>
        <ListItem> 자료구조 (A-) </ListItem>
        <ListItem> 전기전자회로 (A0) </ListItem>
        <ListItem> 하드웨어 시스템 설계 (A0) </ListItem>
        <ListItem> 시스템 프로그래밍 (A-) </ListItem>
        <ListItem> 소프트웨어 개발의 원리와 실습 (A0) </ListItem>
      </List>
    </ListItem>
    <ListSubheader style={{ color: 'black' }}>
      <Typography variant="h5"> Programming Skills </Typography>
    </ListSubheader>
    <ListItem>
      <List>
        <ListItem>
          <Typography variant="body1">
            <strong>
              {'프로그래밍 언어: '}
            </strong>
            C, C++, Java, Python 3, JavaScript, typescript, css
          </Typography>
        </ListItem>
        <ListItem variant="body1">
          <Typography variant="body1">
            <strong>
              {'라이브러리 및 프레임워크: '}
            </strong>
            React, Redux, Django, PyTorch, GLib
          </Typography>
        </ListItem>
        <ListItem variant="body1">
          <Typography variant="body1">
            <strong>
              {'기타: '}
            </strong>
            Git
          </Typography>
        </ListItem>
      </List>
    </ListItem>
  </List>
);

const SkillContentEN = () => (
  <List>
    <ListSubheader style={{ color: 'black' }}>
      <Typography variant="h5"> Courses </Typography>
    </ListSubheader>
    <ListItem>
      <List>
        <ListItem> Digital Computer Concept and Practice (A0)</ListItem>
        <ListItem> Logic Design (A-) </ListItem>
        <ListItem> Computer Architecture (A+) </ListItem>
        <ListItem> Data Structure (A-) </ListItem>
        <ListItem> Electrical and Electronic Circuits (A0) </ListItem>
        <ListItem> Hardware System Design (A0) </ListItem>
        <ListItem> System Programming (A-) </ListItem>
        <ListItem> Principles and Practices of Software Development (A0) </ListItem>
      </List>
    </ListItem>
    <ListSubheader style={{ color: 'black' }}>
      <Typography variant="h5"> Programming Skills </Typography>
    </ListSubheader>
    <ListItem>
      <List>
        <ListItem>
          <Typography variant="body1">
            <strong>
              {'Languages: '}
            </strong>
            C, C++, Java, Python 3, JavaScript, typescript, css
          </Typography>
        </ListItem>
        <ListItem variant="body1">
          <Typography variant="body1">
            <strong>
              {'Library and Frameworks: '}
            </strong>
            React, Redux, Django, PyTorch, GLib
          </Typography>
        </ListItem>
        <ListItem variant="body1">
          <Typography variant="body1">
            <strong>
              {'etc.: '}
            </strong>
            Git
          </Typography>
        </ListItem>
      </List>
    </ListItem>
  </List>
);

const SkillContent = (props) => {
  const { lang } = getProps(props);

  switch (lang) {
    case 'KR':
      return SkillContentKR();
    case 'EN':
      return SkillContentEN();
    default:
      return null;
  }
};

export default SkillContent;
