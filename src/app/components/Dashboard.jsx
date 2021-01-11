import React from 'react'
import { connect } from 'react-redux'
import { ConnectedTaskList } from './TaskList'

export const DashBoard = ({groups}) => (
    <div>
       {
        groups.map(group=>(
            <div key={group.id}> 
                <ConnectedTaskList id={group.id} name={group.name}></ConnectedTaskList>
            </div>
        ))}
    </div>
)

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(DashBoard);