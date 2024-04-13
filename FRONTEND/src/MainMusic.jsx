import React, { useEffect, useState } from "react";

function MainMusic(props) {
  // Add a state to force component re-renders when props.audio changes
  const [audioKey, setAudioKey] = useState(0);

  // Use useEffect to update the key whenever props.audio changes
  useEffect(() => {
    setAudioKey(prevKey => prevKey + 1);
  }, [props.audio]);

  return (
    <div className='bg-orange-50 p-2 w-1/2 m-auto flex flex-wrap'>
      <img className="w-48 h-48 p-2" src={props.imgURL} alt="Select Song" />
      <p className="text-0.5xl flex flex-wrap md:text-2xl sm:text-2xl text-orange-300 font-sans m-auto p-2 font-semibold cursor-default">
        {props.name == null ? "Select Song" : props.name}
      </p>
      {/* Use audioKey as the key prop */}
      {props.audio == null ? "" : (
        <audio key={audioKey} controls className="flex m-auto my-2 text-center" preload={"auto"}>
          <source src={props.audio} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}

export default MainMusic;
