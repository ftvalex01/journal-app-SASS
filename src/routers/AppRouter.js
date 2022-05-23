import React from 'react'
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter
} from "react-router-dom";
import {AuthRouter} from "../routers/AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";


export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<AuthRouter/>}>
          </Route>
          <Route path="/" element={<JournalScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
