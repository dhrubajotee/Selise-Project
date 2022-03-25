import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const Sidebar = [
  {
    title: 'Author',
    path: '/author',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Favourite Author',
    path: '/favourite-author',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];