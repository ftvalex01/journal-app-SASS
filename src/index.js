import React from 'react'
import {createRoot} from "react-dom/client"
import { JournalApp } from './JournalApp';
import './styles/styles.scss'

const container = document.getElementById('root')
const rootElement = createRoot(container)


rootElement.render(
        <JournalApp/>
);