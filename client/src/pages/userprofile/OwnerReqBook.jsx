import React, { useEffect, useState } from 'react'
import style from './ownerreqbook.module.css'
import DataTable from 'react-data-table-component'
import { Booked } from '../../assets/data/data';

export default function OwnerReqBook() {

  const [booked, setBooked] = useState([]);
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState([])

  const getBooked = () => {
    const all_booked = Booked
    setBooked(all_booked)
    setFilter(all_booked)
  }

  useEffect(()=>{
    getBooked();
  },[])

  useEffect(()=>{
    const result = booked.filter((bk)=>{
      return bk.renter_name.toLowerCase().match(search.toLowerCase()) || bk.owner_name.toLowerCase().match(search.toLowerCase())
    })

      setFilter(result)

  })

  const columns = [
    {
      name: 'Renter Name',
      selector: (row)=> row.renter_name
    },
    {
      name: 'Owner Name',
      selector: (row)=> row.owner_name
    },
    {
      name: 'Property ID',
      selector: (row)=> row.property_id
    },
    {
      name: 'Location',
      selector: (row)=> row.location
    },
    {
      name: 'Duration',
      selector: (row)=> row.duration,
      sortable:true      
    },
    {
      name: 'Total Rent Price',
      selector: (row)=> row.tprice,
      sortable:true
    },
    {
      name: 'Action',
      cell: (row)=> (
        <button className='px-3 py-1 text-[1.2rem] text-white rounded bg-[#E80E0E]'>Leave Out</button>
      )
    }
  ]

  return (
    <>
      <div className={style.cont}>
        <h1>Booked items's Table</h1>
        <div className={style.table}>
          <DataTable
            columns={columns} 
            data={filter} 
            pagination
            fixedHeader
            fixedHeaderScrollHeight='500px'
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions={
              <button className='px-4 py-1 text-[1.2rem] text-white font-[700] rounded bg-blue-700 mr-2'>Export</button>
            }
            subHeader
            subHeaderComponent={
              <input 
                className='border-2 border-gray-700 rounded-[.5rem] px-3 py-2' 
                type='text' 
                placeholder='Search by name' 
                value={search}
                onChange={(e)=>setSearch(e.target.value)}            
              />
            }
            subHeaderAlign='left'
            
          />
        </div>
      </div>
    </>
  )
}
