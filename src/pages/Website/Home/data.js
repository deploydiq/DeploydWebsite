import React from 'react'
import { ReactComponent as Automation } from 'images/icon-automation.svg';
import { ReactComponent as Insights } from 'images/icon-insights.svg';
import { ReactComponent as Collaboration } from 'images/icon-collaboration.svg';

export const page3 = [
  {
    img: <Insights className="card-img-top" />,
    title: 'MAKE ACTIONABLE INSIGHTS',
    description: 'Provides at-a-glance visual impact reports with actionable insights that help you see the big picture by taking into account, all direct and transitive dependencies impacts, and helps you take smart decisions about your application releases',
  },
  {
    img: <Automation className="card-img-top" />,
    title: 'AUTOMATE AND DELIVER QUICKLY',
    description: 'Helps automate and accelerate your testing, guarantees test coverage for all impacted code and comprehensive test reports helps you learn and iterate to improve decision-making and deliver results quickly',
  },
  {
    img: <Collaboration className="card-img-top" />,
    title: 'IMPROVE COLLABORATION',
    description: 'Improves work visibility between cross-teams anywhere in the world. Through collaboration, issues can be detected and resolved early in the process improving overall productivity and employee morale',
  },
];