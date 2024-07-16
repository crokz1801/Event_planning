import React from 'react'

const Services = () => {
  const services=[
    {
      id:1,
      url:"/birthday.jpg",
      title:"Birthday Planning"
    },
    {
      id:2,
      url:"/anniversary.jpg",
      title:"Anniversary Planning"
    },
    {
      id:3,
      url:"/camping.jpg",
      title:"Camping Trip"
    },
    {
      id:4,
      url:"/party.jpg",
      title:"Any Sort of Party"
    },
    {
      id:5,
      url:"/wedding.jpg",
      title:"Wedding Planner"
    },
    {
      id:6,
      url:"/gamenight.jpg",
      title:"Game Night planning"
    },
  ]
  return (
    <>
      <div className="services conatiner">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {
            services.map(element =>{
              return(
                <div className="item" key={element.id}>
                  <h3>{element.title}</h3>
                  <img src={element.url} alt={element.title}/>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Services
