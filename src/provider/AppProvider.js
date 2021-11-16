import React from 'react';
import { Route, Routes } from "react-router";
import { ROUTES } from "../constants/routes";
import AllNotesPage from '../pages/AllNotesPage/AllNotesPage'
import AddNotePage from '../pages/AddNotePage'
import Settings from '../pages/SettingsPage'


const AppProvider = () => {

    return (
        <Routes >
            <Route exact path={ROUTES.START} element={<AllNotesPage />} />
            <Route path={ROUTES.NEW} element={<AddNotePage />} />
            <Route path={ROUTES.OLD} element={<Settings />} />
        </Routes>
    )
}

export default AppProvider
