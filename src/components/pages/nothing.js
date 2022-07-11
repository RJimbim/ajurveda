import React from 'react'
import { useLocation, useParams } from "react-router-dom"
import Footbar from '../footbar/Footbar';
import Nav from '../navbar/Nav';
import SmallTopBar from '../topbar/SmallTopBar';

const Nothing = () => {
    const { id } = useParams();
    const query = new URLSearchParams(useLocation().search);

    return (
    <>
    <SmallTopBar />
    <Nav />
    <h2>Id is = {id}</h2>
    <h2>{query.get("first")}</h2>
    <h2>{query.get("last")}</h2>
    <Footbar />
    </>
    );
};

export default Nothing