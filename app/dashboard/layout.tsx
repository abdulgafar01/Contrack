import Header from '@/components/ui/dashboard/header'
import Sidebar from '@/components/ui/dashboard/sidebar'
import React from 'react'

const layout = ({children} :  { children: React.ReactNode }) => {
  return (
    <div>
     <div className="flex min-h-screen bg-gray-200">
        <Sidebar/>

        <div className='flex-1 flex flex-col'>
                <Header/>
                    {/* Page Content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default layout
