import React, { useEffect, useState } from 'react';

export default function TaskDetails(){
  const [task,setTask]=useState(null);

  useEffect(()=>{
    fetch('/task.json').then(r=>r.json()).then(data=>setTask(data));
  },[]);

  if(!task) return <p>Loading...</p>;

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

      {/* Left Section */}
      <div className='lg:col-span-2 bg-white p-6 rounded-xl shadow border'>

        {/* Header */}
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 border rounded-full flex items-center justify-center font-bold text-lg'>
              {task.id}
            </div>
            <div>
              <h1 className='text-xl font-bold'>{task.name}</h1>
              <p className='text-gray-500 text-sm'>{task.institution}</p>
            </div>
          </div>

          <div className='text-right'>
            <span className='px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold'>
              {task.status}
            </span>
            <p className='text-xs text-gray-500 mt-1'>Submitted</p>
            <p className='text-sm font-semibold'>{task.submittedAt}</p>
          </div>
        </div>

        <hr className='my-4'/>

        {/* Data Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {Object.entries(task.details).map(([label,value])=>(
            <div key={label}>
              <p className='text-gray-500 text-sm'>{label}</p>
              <p className='font-semibold'>{value}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Right Section */}
      <div className='bg-white p-6 rounded-xl shadow border'>

        <h2 className='font-semibold mb-2'>Audio</h2>
        {task.audio ? (
          <audio controls src={task.audio} className='w-full'/>
        ) : <p className='text-gray-500 text-sm'>No audio</p>}

        <h2 className='font-semibold mt-6 mb-2'>Images</h2>
        <div className='grid grid-cols-2 gap-2'>
          {task.images.map((img,i)=>(
            <img key={i} src={img} className='w-full h-24 object-cover rounded border'/>
          ))}
        </div>

        <a href={task.map} target='_blank' className='text-blue-600 text-sm block mt-4'>
          {task.distance} M Map
        </a>
      </div>

    </div>
  );
}
