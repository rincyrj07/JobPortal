import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobList = () => {
  return (
    <div>
        <Table>
            <TableCaption>Applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className='text-right'>Status</TableHead>
                    </TableRow>
                </TableHeader>
            <TableBody>
                {
                    [1,2,3,4,5].map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>07-11-2024</TableCell>
                            <TableCell>Fullstack developer</TableCell>
                            <TableCell>Global Service Pvt Ltd</TableCell>
                            <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                            
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobList