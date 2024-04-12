import React from "react"

function MainMusic(props)
  {
    return(
      <div className=' bg-orange-50 p-2 w-1/2 text-center m-auto flex flex-wrap'>
    <img className=" w-48  flex flex-left p-2 " src={props.imgURL}/>
    <p class="text-3xl text-center flex flex-left text-orange-300 font-sans m-auto p-2 font-semibold "  >{props.name}</p>

    <audio  controls className=" flex m-auto" audioprocess reload >
   <source   src={props.audio}  type="audio/mpeg"/>
   </audio>
   </div>
    );
  }

  export default MainMusic;