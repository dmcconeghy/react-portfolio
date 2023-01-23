import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectsMenu from "../components/ProjectsMenu";

export default function Root() {
  return (
    <>
    <Outlet><ProjectsMenu></ProjectsMenu></Outlet>
    {/* <App >
        <Outlet />
    </App> */}
    </>
  );
}


