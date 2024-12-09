import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
  {
    filterType: "Location",
    array: ["Bangalore", "Noida", "Chennai", "Pune", "Delhi"]
  },
  {
    filterType: "Job Category",
    array: ["Data Analyst", "Fullstack Developer", "HR Specialist", "Financial Analyst", "Frontend Developer"]
  },
  {
    filterType: "Salary",
    array: ["20k-30k", "25k-30k", "30k-35k", "50k-60k", "30k-40k"]
  },
]

const FilterJobCard = () => {
  return (
    <div className='bg-white p-3 w-full rounded-md'>
      <h1 className='text-lg font-bold'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} />
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterJobCard