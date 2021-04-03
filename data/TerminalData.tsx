import { Fragment } from "react";

export const TerminalData = [
  {
    cmd: 'help diegorlb',
    txt: [
      'Usage: diegorlb [option]',
      <br key={'0101'} />,
      <Fragment key={'0102'}>&emsp;init&emsp;&emsp;&ensp;&nbsp;Activates presentation.</Fragment>,
      <br key={'0103'}/>,
      <Fragment key={'0104'}>&emsp;skills&emsp;&emsp;Show skills.</Fragment>,
    ],
  },
  {
    cmd: 'diegorlb init',
    txt: [
      'Initializing...',
      <br key={'0201'} />,
      'Hello there!',
      <br key={'0202'} />,
      `Nice to meet you, my name is Diego Rodríguez.
      I'm a nineteen years old, Junior Javascript and Typescript Developer from Buenos Aires, Argentina.
      I enjoy coding whatever idea or project crosses my mind.
      I plan to expand my knowledge in programming, constantly improving.`,
    ]
  },
  {
    cmd: 'diegorlb skills',
    txt: [
      'Current Skills:',
      <br key={'0301'} />,
      `Javascript, Typescript, NextJS, ReactJS, React Native, Styled Components, Styled Tools, Framer Motion, React Spring, ExpressJS
      NodeJS, Fastify, Nodemon, Bcrypt, JWT, MongoDB, Mongoose, HTML, CSS, among others...`
    ],
  },
]