import React from 'react'
import { ReactComponent as Automation } from 'images/icon-automation.svg';
import { ReactComponent as Insights } from 'images/icon-insights.svg';
import { ReactComponent as Collaboration } from 'images/icon-collaboration.svg';

export const assets = 'https://gw.alipayobjects.com/os/s/prod/antv/assets';
const base = 'https://antv.alipay.com/';

export const page1 = [
  {
    img: `${assets}/image/icon/g2-c94ef.svg`,
    href: `${base}zh-cn/g2/3.x/index.html`,
    title: 'G2',
    description: ' 是以数据为驱动，具有高度的易用性和扩展性的可视化图形语法。',
  },
  {
    img: `${assets}/image/icon/g6-b4554.svg`,
    title: 'G6',
    href: `${base}zh-cn/g6/1.x/index.html`,
    description: ' 是一套便捷、动态和富有交互的流程图和关系分析的图表库。',
  },
  {
    img: `${assets}/image/icon/f2-d360c.svg`,
    title: 'F2',
    href: `${base}zh-cn/f2/3.x/index.html`,
    description: ' 是一套精简、高性能、易扩展的的移动端图表库。',
  },
];

export const page3 = [
  {
    title: 'Curious',
    description: 'We have an inquisitive mindset and strive to find better ways to solve problems, learn and grow',
    style: {boxShadow: '10px 0px 0px 0px #0998B4 inset'}
  },
  {
    title: 'Accountable',
    description: 'We take ownership of our work and honor our commitment to customers, always supporting them in their journey',
    style: {boxShadow: '10px 0px 0px 0px #F6CE41 inset'}
  },
  {
    title: 'Respect',
    description: 'We treat others like how we want to be treated, with respect and understanding',
    style: {boxShadow: '10px 0px 0px 0px #C3423F inset'}
  },
  {
    title: 'Empathy',
    description: 'We believe in listening to our users and each other, acknowledging diverse perspectives, and working collaboratively towards a common goal',
    style: {boxShadow: '10px 0px 0px 0px #62C370 inset'}
  },
];

export const page4 = [
  {
    name: '陈为',
    profile: '浙江大学计算机学院 CAD & CG 国家重点实验室教授 可视化专家',
    avatar: 'https://os.alipayobjects.com/rmsportal/CcFeLxXurbQmwrT.jpg',
    comment: '在多年可视化设计与开发的积累基础上，蚂蚁金服团队推出了 AntV 产品，这是工业界在基础可视化语法与实践方面发出的最强声音，也是工业界与学术界一道推进可视化研发进展的最佳利器。',
  },
  {
    name: '林峰',
    profile: '爱烹饪的数据可视化攻城狮',
    avatar: 'https://zos.alipayobjects.com/rmsportal/wtkIALmYDSmOIiAalkdv.jpg',
    comment: 'G2 是面粉，ECharts 是面条，皆微小但美好，因小食材怀大梦想，助力共筹东方巨龙崛起之盛宴，迎四海饕客。',
  },
];

export const page5 = [
  `${assets}/image/home/aliyun-f111c.png`,
  `${assets}/image/home/alipay-fceea.png`,
  `${assets}/image/home/tmall-cb94f.png`,
  `${assets}/image/home/taobao-ade5b.png`,
  `${assets}/image/home/mybank-da103.png`,
  `${assets}/image/home/jd-23e52.png`,
  `${assets}/image/home/yunos-2edef.png`,
  `${assets}/image/home/cainiao-40fc8.png`,
];
