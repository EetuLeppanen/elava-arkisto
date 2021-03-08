import React from 'react'
import Name from './Name'

function NamesContainer() {
    
        return (
            <div>
                {this.props.names.map(name => <Name name = {name}/>)}
            </div>
        )
    }

export default NamesContainer