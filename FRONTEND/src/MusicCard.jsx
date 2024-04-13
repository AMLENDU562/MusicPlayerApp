import React from "react"
function MusicCard(props)
{

    function handleClick()
    {
        props.onCard(props.id);
    }
    
    return (
        <li className="flex flex-left   cursor-pointer" onClick={handleClick} >
        <img className=" w-32 flex flex-left p-5" src={props.img} />
        <p className=" text-2xl  m-3 text-[#cfac4b] no-underline hover:underline  cursor-pointer">{props.name}</p>
    
      
        </li>
    );
}

export default MusicCard;