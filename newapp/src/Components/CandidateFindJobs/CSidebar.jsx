import React from 'react'
import { CSidebarStyle } from './CSidebarStyle'
import CSidebarContent from './CSidebarContent'

const CSidebar = () => {
    return (
        <div>
            <CSidebarStyle>
                <div class="wrapper">
                    <div class="sidebar">
                    <CSidebarContent />
                    </div>
                </div>
            </CSidebarStyle>
        </div>
    )
}

export default CSidebar
