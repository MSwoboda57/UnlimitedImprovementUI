import React from 'react';
import * as AiIcons from "react-icons/ai";
import { IoIosFitness} from "react-icons/io";
import { IoIosBook } from "react-icons/io";
import { IoIosBulb } from "react-icons/io";
import { IoMdNutrition } from "react-icons/io";
import { IoLogoNoSmoking } from "react-icons/io";
import { IoIosLeaf }  from "react-icons/io";


export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Exercise',
        path: '/exercise',
        icon: <IoIosFitness />,
        cName: 'nav-text'
    },
    {
        title: 'Learning',
        path: '/learning',
        icon: <IoIosBook />,
        cName: 'nav-text'
    },
    {
        title: 'Meditation',
        path: '/meditation',
        icon: <IoIosLeaf />,
        cName: 'nav-text'
    },
    {
        title: 'Nutrition',
        path: '/nutrition',
        icon: <IoMdNutrition />,
        cName: 'nav-text'
    },
    {
        title: 'New Ideas',
        path: '/newIdea',
        icon: <IoIosBulb />,
        cName: 'nav-text'
    },
];
