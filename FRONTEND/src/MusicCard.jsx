import React from "react"


function MusicCard(props)
{

    function handleClick()
    {
        props.onCard(props.id);
    }
    
    return (
        <li className="flex flex-left" >
        <img className=" w-32 flex flex-left p-5" src={props.img} />
        <h1 class="text-2xl text-center text-orange-300 font-sans cursor-pointer  hover:underline" onClick={handleClick} >{props.title}</h1>
      
        </li>
    );
}

export default MusicCard;