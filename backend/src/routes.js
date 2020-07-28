const { Router } = require('express');
const { Octokit } = require('@octokit/core');
const octokit = new Octokit();

const routes = Router();

routes.get('/timeline/:username', async (request, response) => {
  const { username } = request.params;

  const repositories = await getUserRepositories(username);
  return response.json(repositories);

  let responseInfo = [];

  for (let i = 0; i < repositories.length; i++) {
    responseInfo.push = await getRepositoryDates(username, repositories[i]);
  }

  return response.json(responseInfo);
});

async function getUserRepositories(username) {
  const info = await octokit.request('GET /users/{username}/repos', {
    username,
  });

  const repositoriesData = info.data;

  return repositoriesData.map(repository => repository.name);
}

async function getRepositoryDates(username, repository) {
  const { data } = await octokit.request(
    'GET /repos/{owner}/{repo}/stats/commit_activity',
    {
      owner: username,
      repo: repository,
    }
  );

  const weeks = data.filter(week => week.total > 0);

  const firstCommitDateUnix = weeks[0].week;
  const lastCommitDateUnix = weeks[weeks.length - 1].week;

  const firstCommitDate = new Date(firstCommitDateUnix * 1000);
  const lastCommitDate = new Date(lastCommitDateUnix * 1000);

  return {
    firstCommitDate: {
      year: firstCommitDate.getFullYear(),
      month: firstCommitDate.getUTCMonth() + 1,
      day: firstCommitDate.getUTCDate(),
    },
    lastCommitDate: {
      year: lastCommitDate.getFullYear(),
      month: lastCommitDate.getUTCMonth() + 1,
      day: lastCommitDate.getUTCDate(),
    },
  };
}

module.exports = routes;
