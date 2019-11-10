import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import CallCenter from "./views/CallCenter";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Noc from './views/Noc'
import NocTabs from './views/NocTabs'
//import Login from './views/Login'
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/callcenter" />
  },
  {
    path: "/blog-noc",
    layout: DefaultLayout,
    component: Noc
  },
  /*
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },*/
  {
    path: "/noc",
    layout: DefaultLayout,
    component: NocTabs
  },
  {
    path: "/callcenter",
    layout: DefaultLayout,
    component: CallCenter
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
