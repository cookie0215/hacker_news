import Home from "./pages/Home";
import Top from "./pages/Top";
import New from "./pages/New";
import Show from "./pages/Show";
import Ask from "./pages/Ask";
import Job from "./pages/Job";

import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as TopIcon } from "./assets/top.svg";
import { ReactComponent as NewsIcon } from "./assets/new.svg";
import { ReactComponent as ShowIcon } from "./assets/show.svg";
import { ReactComponent as AskIcon } from "./assets/ask.svg";
import { ReactComponent as JobsIcon } from "./assets/job.svg";

export const navis = [
  { name: 'home', path: '/', element: <Home />, iconSvg: HomeIcon },
  { name: 'top', path: '/top', element: <Top />, iconSvg: TopIcon },
  { name: 'new', path: '/new', element: <New />, iconSvg: NewsIcon },
  { name: 'show', path: '/show', element: <Show />, iconSvg: ShowIcon },
  { name: 'ask', path: '/ask', element: <Ask />, iconSvg: AskIcon },
  { name: 'job', path: '/job', element: <Job />, iconSvg: JobsIcon }
]