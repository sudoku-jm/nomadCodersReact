import React from 'react';
import {UseConfirm} from "./UseConfirm"

const UseConfirmJsx = () => {
    const deleteWorld = () => console.log("delete the world")
    const abort = () => console.log("Aborted")
    const confirmDelete = UseConfirm("Are you sure?", deleteWorld, abort)
    
    return (
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    );
};

export default UseConfirmJsx;