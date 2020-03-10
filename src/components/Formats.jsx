/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Typography, ListItem, List } from '@material-ui/core';

const getExperienceProps = (props) => ({
  title: props.title,
  startsAt: (props.startsAt) ? props.startsAt : '',
  endsAt: (props.endsAt) ? props.endsAt : '',
  content: props.content,
  skills: props.skills,
});


const getProjectProps = (props) => ({
  title: props.title,
  repo: props.repo,
  startsAt: (props.startsAt) ? props.startsAt : '',
  endsAt: (props.endsAt) ? props.endsAt : '',
  content: props.content,
  skills: props.skills,
});


export const Experience = (props) => {
  const {
    title,
    startsAt,
    endsAt,
    content,
    skills,
  } = getExperienceProps(props);

  return (
    <div>
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="subtitle1">
        {`${startsAt} ~ ${endsAt}`}
      </Typography>
      <List>
        {content.map((item, idx) => (
          <ListItem key={idx} dense>
            <Typography variant="body1">
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="body2">
        {`Related skills - ${skills}`}
      </Typography>
    </div>
  );
};

export const Project = (props) => {
  const {
    title,
    repo,
    startsAt,
    endsAt,
    content,
    skills,
  } = getProjectProps(props);

  return (
    <div>
      <Typography variant="h5">
        {`${title} `}
        {
          (repo) ? (
            <a href={repo}>
              repo
            </a>
          ) : (
            <p> (private repo) </p>
          )
        }
      </Typography>
      <Typography variant="subtitle1">
        {`${startsAt} ~ ${endsAt}`}
      </Typography>
      <List>
        {content.map((item, idx) => (
          <ListItem key={idx} dense>
            <Typography variant="body1">
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Typography variant="body2">
        {`Related skills - ${skills}`}
      </Typography>
    </div>
  );
};

export default { Experience, Project };
