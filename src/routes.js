import Home from "./pages/Home";
import Top from "./pages/Top";
import New from "./pages/New";
import Show from "./pages/Show";
import Ask from "./pages/Ask";
import Job from "./pages/Job";

import homeIcon from "./assets/home.svg";
import topIcon from "./assets/top.svg";
import newsIcon from "./assets/new.svg";
import showIcon from "./assets/show.svg";
import askIcon from "./assets/ask.svg";
import jobsIcon from "./assets/job.svg";

export const navis = [
  { name: 'home', path: '/', element: <Home />, imgUrl: homeIcon },
  { name: 'top', path: '/top', element: <Top />, imgUrl: topIcon },
  { name: 'new', path: '/new', element: <New />, imgUrl: newsIcon },
  { name: 'show', path: '/show', element: <Show />, imgUrl: showIcon },
  { name: 'ask', path: '/ask', element: <Ask />, imgUrl: askIcon },
  { name: 'job', path: '/job', element: <Job />, imgUrl: jobsIcon }
]