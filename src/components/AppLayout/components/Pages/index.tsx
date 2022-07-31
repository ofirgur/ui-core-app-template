import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { PagesStyled } from './styled';

const Home = () => <div>Homeeeeeeeeeeeeeeeeeeeeeeeee</div>;
const Teams = () => <div>Teams</div>;
const Team = () => <div>Team</div>;
const NewTeamForm = () => <div>NewTeamForm</div>;
const LeagueStandings = () => <div>LeagueStandings</div>;

const Pages = () => {
  return (
    <PagesStyled>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route>
      </Routes>
    </PagesStyled>
  );
};

export default Pages;
