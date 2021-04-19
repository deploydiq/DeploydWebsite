import React from 'react'
import { ReactComponent as Repositories } from 'images/icon-repositories.svg';
import { ReactComponent as Score } from 'images/icon-Score.svg';
import { ReactComponent as Report } from 'images/icon-report-analyze.svg';
import { ReactComponent as Transitive } from 'images/icon-transitive.svg';

export const page2 = [
  {
    img: <Report className="card-img-top" />,
    title: 'Exportable reports',
    description: 'Quickly generate summary and detailed reports to track code enhancement impacts for the developers and managers that can be exported in multiple formats and facilitate collaboration between teams',
  },
  {
    img: <Repositories className="card-img-top" />,
    title: 'Multiple code repositories',
    description: 'Perform a 1-time set up of multiple platforms like Github and Bitbucket, and import as many code repositories as needed at any time from these platforms',
  },
  {
    img: <Transitive className="card-img-top" />,
    title: 'Transitive Dependency insights',
    description: 'Drill down into system behavior by using the insights about direct and transitive impacts, identify effecient path flow and make informed decisions',
  },
  {
    img: <Score className="card-img-top" />,
    title: 'Criticality Evaluation',
    description: 'Review the criticality scores of impacted components, plan your application release strategy and optimize the time of available resources',
  },
  
];

export const page4 = [
  {
    title: 'Developers',
    description: 'Get complete visibility of simultaneous and interdependent changes to the code and the impact making it easy to understand the scope of unit testing and deliver high quality code',
  },
  {
    title: 'Reviewers',
    description: 'Keep up with developer changes across projects on the platform and know exactly what needs to be retested, determining the order of implementation and push code to production without any interruption',
  },
  // {
  //   title: 'Testers',
  //   description: 'Focus on the critical and necessary test suites as identified to ensure system stability, reducing testing time drastically and enabling faster shipping time',
  // },
];