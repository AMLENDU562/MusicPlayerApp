
import './App.css';
import MusicCard from "./MusicCard"
import {Songs} from "./Songs"
import React,{useState,useEffect} from "react"
import MainMusic from "./MainMusic"
import axios from 'axios'
function Landing() {

  const [SongData,setSongData]=useState(null)
  const [MainSong,setMainSong]=useState(null);
  

  useEffect(()=>{
    getImage();
  },[])


function onSongClick(id){
setMainSong(SongData.find(props=>props._id==id));
}

  async function getImage()
{
  try{
    const result=await axios.get('http://localhost:3000/get-image');
    setSongData(result.data);

    console.log(SongData);
  }

  catch(e){
    console.log(e)
  }
}




  return (
    
    <div className=' flex flex-wrap  bg-orange-100 '>
    <section className="bg-[url(https://c4.wallpaperflare.com/wallpaper/288/330/391/verbal-jint-love-music-wallpaper-preview.jpg)] w-full pb-3 bg-cover bg-no-repeat">
    <nav className='m-5 text-end'>
        <button><a href='/upload' className='flex flex-right'>UPLOAD SONG</a></button>
    </nav>
    <h1 className="text-red-200 text-center text-5xl font-extrabold">MUSIC-FY</h1>
        
      <h1 className=" my-12 sm:text-5xl text-3xl text-purple-600 font-serif font-bold">❤️ I LOVE MUSIC 🎶</h1>
     {MainSong==null?<MainMusic/>: <MainMusic audio={new URL('./audios/'+MainSong.aud.data, import.meta.url).href} imgURL={new URL('./images/'+MainSong.img.data, import.meta.url).href} name={MainSong.name}/>}
   
        
    </section>
   
        
     
 <ul className=" items-center">
    
{SongData==null?"UPLOAD YOUR SONG":SongData.map(props=><MusicCard id={props._id}  name={props.name} img={new URL('./images/'+props.img.data, import.meta.url).href} onCard={onSongClick} audio={new URL('./audios/'+props.aud.data, import.meta.url).href}/>)}

      </ul>
    </div>
  );

}

export default Landing;
