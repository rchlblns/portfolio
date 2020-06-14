import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import Projects from "./Projects";
import Lumikha from "./Lumikha";
import SocialAnimals from "./SocialAnimals";
import AdventureTime from "./AdventureTime";
import TrainScheduler from "./Train";
import PacerTMS from "./PacerTMS";
import TriviaGame from "./HPTrivia";

const routes = [

    {
        path: "/projects/lumikha",
        projectPage: () => <Lumikha />
    },
    {
        path: "/projects/clicky-game",
        projectPage: () => <AdventureTime />
    },
    {
        path: "/projects/social-animals",
        projectPage: () => <SocialAnimals />
    },
    {
        path: "/projects/train-scheduler",
        projectPage: () => <TrainScheduler />
    },
    {
        path: "/projects/pacer-tms",
        projectPage: () => <PacerTMS />
    },{
        path: "/projects/trivia-game",
        projectPage: () => <TriviaGame />
    }
];

export default class ProjectDetail extends React.Component {
    render() {
        return (
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        children={<route.projectPage />}
                    />
                ))
                }
            </Switch>
        )
    }
}