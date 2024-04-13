import {FaAngular, FaReact} from "react-icons/fa";
import {ReactNode} from "react";

export interface MenuCard {
  id: string,
  title: string,
  path: string,
  color: string,
  icon: any
}
// @ts-nocheck
export const MenuCards: MenuCard[] = [
  {
    id: '1',
    title: "React Level 1",
    path: "exam/1",
    color: 'rgb(44,243,0)',
    icon: <FaReact size={30}/>
  },
  {
    id: '2',
    title: 'React Level 2',
    path: 'exam/3',
    color: 'rgb(44,243,0)',
    icon: <FaReact size={30} />
  },
  {
    id: '3',
    title: 'React Level 3',
    path: 'exam/5',
    color: 'rgb(44,243,0)',
    icon: <FaReact size={30} />
  },
  {
    id: '4',
    title: 'Angular Level 1',
    path: 'exam/2',
    color: 'rgb(64,204,255)',
    icon: <FaAngular size={30}/>,
  },
  {
    id: '5',
    title: 'Angular Level 2',
    path: 'exam/4',
    color: 'rgb(64,204,255)',
    icon: <FaAngular size={30}/>,
  },
  {
    id: '6',
    title: 'Angular Level 3',
    path: 'exam/6',
    color: 'rgb(64,204,255)',
    icon: <FaAngular size={30}/>,
  }
]
