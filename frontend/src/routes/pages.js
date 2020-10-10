import Profile from "../components/Profile";
import Home from "../components/Home";
import TasksList from "../components/TasksList";

const pages = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/profile',
    component: Profile,
    exact: false,
  },
  {
    path: '/tasks',
    component: TasksList,
    exact: false,
  },
];

export default pages;
