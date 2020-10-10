import Profile from "../components/Profile";
import Home from "../components/Home";
import Tasks from "../components/Tasks";

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
    component: Tasks,
    exact: false,
  },
];

export default pages;
