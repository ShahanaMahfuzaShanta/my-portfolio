import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";
import Features from "../Pages/Features/Features";
import Resume from "../Pages/Resume/Resume";
import Contact from "../Pages/Contact/Contact";
import Education from "../Pages/Resume/Education";
import Experiences from "../Pages/Resume/Experiences";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/features',
                element: <Features />
            },
            {
                path: '/my-skills',
                element: <Skills />
            },
            {
                path: '/my-projects',
                element: <Projects />
            },
            {
                path: '/resume',
                element: <Resume />
            },
            {
                path: '/education',
                element: <Education />
            },
            {
                path: '/experience',
                element: <Experiences />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
])

export default router;