
import './App.css';
import MusicCard from "./MusicCard"
import {Songs} from "./Songs"
import React,{useState} from "react"
import MainMusic from "./MainMusic"


function Landing() {

  const [oldState,newState]=useState(0);
  
  

  function Card(id)
{

  newState(id);
}




  return (
    
    <div className=' flex flex-wrap  bg-orange-100'>
    <section className="bg-[url(https://c4.wallpaperflare.com/wallpaper/288/330/391/verbal-jint-love-music-wallpaper-preview.jpg)] inline w-full pb-3 bg-cover bg-no-repeat">
    <nav className='m-5 text-end'>
        <button><a href='/upload' className='flex flex-right'>UPLOAD SONG</a></button>
    </nav>
    <h1 className="text-red-200 text-center text-5xl font-extrabold">MUSIC-FY</h1>
        
      <h1 className=" my-12 text-5xl text-purple-600 font-serif font-bold">❤️ I LOVE MUSIC 🎶</h1>
      <MainMusic audio={Songs[oldState].audio} imgURL={Songs[oldState].imgURL} name={Songs[oldState].name}/>
   
        
    </section>
   
        
     
 <ul className=" items-center">
    
{Songs.map((props,index)=><MusicCard id={index} key={index} onCard={Card} title={props.name} img={props.imgURL} audio={props.audio}  />)}

      </ul>
    </div>
  );

}

export default Landing;
