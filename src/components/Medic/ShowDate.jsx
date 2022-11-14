import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Table from './Table'
import main from "../../Assets/Data/main.json"
import shifoxona from "../../Assets/Data/raddom.json"
import kvp from "../../Assets/Data/kvp.json"
import markaziy from "../../Assets/Data/markaziy.json"

const routesArr = [
    {
        path: '',
        element: <Table malumot={main} />,
        id: true
    },
    {
        path: 'shifoxona',
        element: <Table malumot={markaziy} />,
        id: false
    },
    {
        path: 'poliklinika',
        element: <Table malumot={kvp} />,
        id: false
    },
    {
        path: 'kvp',
        element: <Table malumot={kvp} />,
        id: false
    },
    {
        path: 'tugriqxona',
        element: <Table malumot={shifoxona} />,
        id: false
    },
    {
        path: 'ttyo',
        element: <Table malumot={main} />,
        id: false
    },
]

const ShowDate = () => {
  return (
    <Routes>
        {
            routesArr.map((item, idx) => (
                <Route path={item.id ? `${item.path}` : item.path} element={item.element} key={idx} />
            ))}
    </Routes>
  )
}

export default ShowDate
