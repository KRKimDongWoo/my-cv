import React from 'react';
import { List, ListItem, Divider } from '@material-ui/core';
import { Experience } from 'components/Formats';

const getProps = (props) => ({
  lang: props.lang,
});

const ExperienceContentKR = () => (
  <List>
    <ListItem>
      <Experience
        title="서울대학교 아키텍처 및 코드 최적화 연구실 인턴"
        startsAt="2019년 1월"
        endsAt="2019년 2월"
        content={['JavaScript 기반 IoT 응용을 위한 CPU 설계 연구 참여',
          'Node.js, Spidermonkey 등 javascript engine의 Raspberry Pi와 RISC-V 보드로의 cross compiling',
          'Spidernode 빌드 오류 발견 및 수정사항 PR(#400)',
        ]}
        skills="C++, JavaScript engines, cross-compiling 기술"
      />
    </ListItem>
    <Divider />
    <ListItem>
      <Experience
        title="서울대학교 소프트웨어 플랫폼 연구실 인턴"
        startsAt="2019년 7월"
        endsAt="2019년 8월"
        content={['Random Search에 기반한 Neural Architecture model 검색 연구.\'',
          'Hyperparameter tuning 관련 논문 검색 및 연구 (NAS, autokeras 등)',
          'Random search algorithm 및 policy 구현, weight transfer 기능 구현 및 성능 테스트',
        ]}
        skills="Python, PyTorch, FastAI library, DL"
      />
    </ListItem>
    <Divider />
    <ListItem>
      <Experience
        title="서울대학교 소프트웨어 플랫폼 연구실 인턴"
        startsAt="2020년 1월"
        endsAt="2020년 3월"
        content={['GPU resource 관리 framework 개발 참여',
          'Framework를 위한 CLI 구현',
          'Framework를 위한 Web UI의 기본 코드 작성',
          'Framework에서 사용하기 위한 Docker-registry 관련 API 구현 (진행중)',
        ]}
        skills="Python, asyncio library, typescript, React, Redux, redux-saga, docker, docker registry"
      />
    </ListItem>
  </List>
);

const ExperienceContentEN = () => (
  <List>
    <ListItem>
      <Experience
        title="SNU Architecture and Code Optimization Lab Internship"
        startsAt="Jan 2019"
        endsAt="Feb 2019"
        content={['Researched \'CPU Architecture for JavaScript based IoT Devices.\'',
          'Crosscompiling Node.js and SpiderMonkey to Raspberry Pi and RISC-V Board.',
          'Fix problem on Spidernode and send PR(#400)',
        ]}
        skills="C++, JavaScript engines, cross-compiling techniques"
      />
    </ListItem>
    <Divider />
    <ListItem>
      <Experience
        title="SNU Software Platform Lab Internship"
        startsAt="July 2019"
        endsAt="Aug 2019"
        content={['Researched \'Neural Architecture Search Based on Random Search.\'',
          'Read papers related to hyperparameter tuning. (e.g NAS, autokeras...)',
          'Implemented own random search algorithm, and apply it to image classifcation.',
        ]}
        skills="Python, PyTorch, FastAI library, DL"
      />
    </ListItem>
    <Divider />
    <ListItem>
      <Experience
        title="SNU Software Platform Lab Internship"
        startsAt="Jan 2020"
        endsAt="Mar 2020"
        content={['Joined development on GPU resource management framework.',
          'Implemented CLI for the framework.',
          'Implemented base code for the web UI for framework.',
          'Implemented docker-registry related functions in core/CLI (ongoing)',
        ]}
        skills="Python, asyncio library, typescript, React, Redux, redux-saga, docker, docker registry"
      />
    </ListItem>
  </List>
);

const ExperienceContent = (props) => {
  const { lang } = getProps(props);

  switch (lang) {
    case 'KR':
      return ExperienceContentKR();
    case 'EN':
      return ExperienceContentEN();
    default:
      return null;
  }
};

export default ExperienceContent;
