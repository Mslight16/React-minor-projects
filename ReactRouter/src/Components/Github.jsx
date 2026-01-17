import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        
        <div className="min-h-screen bg-gray-50 py-5">
  <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
    
    <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
      {data.name}
    </h1>

    <div className="flex flex-col md:flex-row items-center gap-8">
      
      <img
        src={data.avatar_url}
        alt="Git picture"
        className="w-64 h-64 rounded-full object-cover border-4 border-orange-500 shadow-sm"
      />

      <div className="text-center md:text-left space-y-4">
        <h2 className="text-lg font-medium text-gray-700">
          👥 Followers:{" "}
          <span className="font-semibold text-gray-900">
            {data.followers}
          </span>
        </h2>

        <p className="text-gray-600 text-base leading-relaxed">
          {data.bio}
        </p>

        <p className="text-gray-500 text-sm">
          📍 {data.location}
        </p>
      </div>
    </div>

  </div>
</div>

    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Mslight16')
    return response.json()
}