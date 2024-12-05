import { TiHome } from "react-icons/ti";
import { IconType } from "react-icons";
import { FaMoneyBillWave, FaUserFriends, FaChartLine, FaCreditCard, FaRegFileAlt, FaCog } from "react-icons/fa"; 
import { GrServices } from "react-icons/gr";

interface SidebarLinks {
    icon: IconType,
    name: string,
    path: string
}
export const SidebarLinks: SidebarLinks[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: TiHome,
  },
  {
    name: 'Transactions',
    path: '/transactions',
    icon: FaMoneyBillWave 
  },
  {
    name: 'Accounts',
    path: '/accounts',
    icon: FaUserFriends
  },
  {
    name: 'Investments',
    path: '/investments',
    icon: FaChartLine 
  },
  {
    name: 'Credit Cards',
    path: '/credit-cards',
    icon: FaCreditCard 
  },
  {
    name: 'Loans',
    path: '/loans',
    icon: FaRegFileAlt 
  },
  {
    name: 'Services',
    path: '/services',
    icon: GrServices
  },
  {
    name: 'My Privileges',
    path: '/priviledges',
    icon: FaUserFriends
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: FaCog 
  },
];