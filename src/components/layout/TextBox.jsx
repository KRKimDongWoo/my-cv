import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';

const getProps = (props) => ({
  title: props.title,
  content: props.content,
});

export default function TextBox(props) {
  const { title, content } = getProps(props);

  return (
    <Card style={{ width: '100%' }}>
      <CardContent>
        <Typography variant="h4">
          {title}
        </Typography>
        <hr />
        <div>
          {content}
        </div>
      </CardContent>
    </Card>
  );
}
