import React from 'react'
import FilterCard from '../../global_components/filterCard/FilterCard'
import RentCard from '../../global_components/rentCard/RentCard'
import FilterBar from '../../global_components/filterBar/FilterBar'
import SetRange from '../../global_components/setrange/SetRange'

export default function Home() {
  return (
    <>
      <FilterBar/>   
      <SetRange/>
    </>
  )
}
