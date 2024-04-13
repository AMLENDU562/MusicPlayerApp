import React from "react"
import {useState} from "react"
import axios from 'axios'

function Upload()
{
  const [Imagefile,setImagefile]=useState();
  const [name,setName]=useState("")
  const [audiofile,setAudioFile]=useState()
  const onFileUpload=(e)=>
  {
    console.log(e.target.files[0]);
    setImagefile(e.target.files[0]);
  };

  const onChangeName=(e)=>{
    setName(e.target.value);
  }

  const onUploadAudio=(e)=>{
    setAudioFile(e.target.files[0]);
  }

  const onButtonClick=async e=>
  {
    e.preventDefault();
    const form=new FormData();
    console.log(form)
    form.append("image",Imagefile);
    form.append("name",name)
    form.append("audio",audiofile);


    const config = {headers: {'Content-Type': 'multipart/form-data'}}
    const data=await axios.post("http://localhost:3000/upload",form,config);

  };

    return(
        <div className=' m-0 p-0'>
        <button className=" absolute top-0 right-0 m-2 ..."><a href='/' className='flex flex-right'>Go To Home Page</a></button>
        <h1 className=" text-4xl text-pink-500 m-10 font-serif">Upload Your Song 🎵</h1>

        <form onSubmit={onButtonClick} >
        <div class="mb-5" onChange={onChangeName}>
          <input type="text" id="name" placeholder="Enter Song Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>

        
        <div className=" mb-5 text-center">
        <p className=" text-[#C4E4FF] text-2xl m-2">Image Upload</p>
          <input type="file" id="image" name="image" onChange={onFileUpload} required />
        </div>

        <div className=" mb-5 text-center">
        <p className=" text-[#C4E4FF] text-2xl m-2">Audio Upload</p>
          <input type="file" id="audio" name="audio" onChange={onUploadAudio} required />
        </div>


        <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
      </div>

    );
}

export default Upload;