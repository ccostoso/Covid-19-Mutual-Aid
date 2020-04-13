import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Settings from './settings'
import { fetchSettings } from './api'

const routes = [
    {
        path: '/settings',
        component: Settings,
        fetchInitialData: (id) => fetchSettings(id),
    }
]