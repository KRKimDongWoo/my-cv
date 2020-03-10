import React from 'react';
import { List, ListItem, Divider } from '@material-ui/core';
import { Project } from 'components/Formats';

const getProps = (props) => ({
  lang: props.lang,
});

const ProjectContentKR = () => (
  <List>
    <ListItem>
      <Project
        title="웹 개발 (관련 강의: SNU M1522.002400)"
        repo="https://github.com/thunderlink/thunderfish"
        startsAt="2019년 3월"
        endsAt="2019년 6월"
        content={['번개 생성 및 참여를 위한 웹 서비스 제작',
          'Frontend UI 디자인 및 구현',
          'Frontend, backend 간 HTTP request 구현',
          '팀원 코드 리뷰',
        ]}
        skills="Python, Django, React, Redux, redux-saga, css, git"
      />
    </ListItem>
    <Divider />
    <ListItem>
      <Project
        title="GStreamer를 위한 Live profiler 구현 (Course: SNU M1522.000200)"
        repo="https://github.com/cts-2019f-nnstreamer/gst-shark"
        startsAt="2019년 9월"
        endsAt="2019년 12월"
        content={['현재 진행중인 stream에 대한 실시간 profiler 구현',
          '기존의 tracer 코드 분석 (GstShark)',
          'Profiler의 tracer에 사용하기 위한 hook function 구현',
          'NCurses 라이브러리를 사용하기 위한 multi-thread 기능 구현',
          'NCurses 라이브러리를 이용한 UI Design 도움',
        ]}
        skills="C, GLib, GStreamer, NCurses"
      />
    </ListItem>
  </List>
);

const ProjectContentEN = () => (
  <List>
    <ListItem>
      <Project
        title="Web Development (Course: SNU M1522.002400)"
        repo="https://github.com/thunderlink/thunderfish"
        startsAt="Mar 2019"
        endsAt="Jul 2019"
        content={['Develop web service for create/join meetings.',
          'Design frontend UI and implement',
          'Implement communication between backend and frontend',
          'Review codes from co-workers',
        ]}
        skills="Python, Django, React, Redux, redux-saga, css, git"
      />
    </ListItem>
    <Divider />
    <ListItem>
      <Project
        title="Live Profiler for GStreamer (Course: SNU M1522.000200)"
        repo="https://github.com/cts-2019f-nnstreamer/gst-shark"
        startsAt="Oct 2019"
        endsAt="Dec 2019"
        content={['Develop profiler shows profiling data for current stream.',
          'Code analysis on existing tracer (GstShark)',
          'Implement hook functions for the tracer.',
          'Implement multi-thread function for visualization.',
          'Help teammates dealing with UI design (NCurses lib).',
        ]}
        skills="C, GLib, GStreamer, NCurses"
      />
    </ListItem>
  </List>
);

const ProjectContent = (props) => {
  const { lang } = getProps(props);

  switch (lang) {
    case 'KR':
      return ProjectContentKR();
    case 'EN':
      return ProjectContentEN();
    default:
      return null;
  }
};

export default ProjectContent;
