import React from 'react';

import { Timeline, TimelineEvent } from 'react-event-timeline';

import { Container } from './styles';
interface Props {
  data: {
    name: string;
    dates: {
      firstCommitDate: number;
      lastCommitDate: number;
    };
  }[];
}

const Graph: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data[1] ? (
        <Timeline orientation='right'>
          {data.map(repository => (
            <TimelineEvent
              title={repository.name}
              subtitle={`From ${new Date(
                repository.dates.firstCommitDate
              ).toDateString()} to ${new Date(
                repository.dates.lastCommitDate
              ).toDateString()}`}
              createdAt={repository.dates.firstCommitDate}
              key={repository.name}
            ></TimelineEvent>
          ))}
        </Timeline>
      ) : null}
    </Container>
  );
};

export default Graph;
