import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import {HiPlus} from 'react-icons/hi';
import { BiTable } from 'react-icons/bi';

export const Nav = () => (
    <nav className="nav">
        <Link to="/">
            <FaHome />
        </Link>
        <Link to="/add">
            <HiPlus />
        </Link>
        <Link to="/list">
            <BiTable />
        </Link>
    </nav>
)