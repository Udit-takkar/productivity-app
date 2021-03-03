import React from 'react'

export default function DeleteSelectedBlocks({id}) {
    return {
       type:"DELETE_SELECTED_BLOCKS",
       payload:{id:id},

}    
}
