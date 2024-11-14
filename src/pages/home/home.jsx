import React from 'react'
import FilterCard from '../../global_components/filterCard/FilterCard'
import RentCard from '../../global_components/rentCard/RentCard'
import FilterBar from '../../global_components/filterBar/FilterBar'
import SetRange from '../../global_components/setrange/SetRange'
import Login from '../../global_components/login/Login'
import style from './home.module.css'
import RenterProfile from '../userprofile/RenterProfile'
import AdminProfile from '../userprofile/AdminProfile'
import OwnerProfile from '../userprofile/OwnerProfile'

import { Products } from '../../assets/data/data'
import RTfilter from '../../global_components/realtimefilter/RTfilter'

export default function Home() {
  return (
    <>
      
      <AdminProfile />
      
    </>
  )
}
