import '../assets/CSS/index.css';
import Down from '../assets/img/down.svg'
import React, { useState } from 'react';
function Home() {
  const [activeSections, setActiveSections] = useState({});

  const toggleSection = (index) => {
    setActiveSections((prevActiveSections) => ({
      ...prevActiveSections,
      [index]: !prevActiveSections[index],
    }));
  };

  const sections = [
    { title: 'Acerca De', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga corrupti quaerat, ex, officiis, quis praesentium veritatis sed modi harum similique aliquam amet a. Maxime veniam officiis voluptates autem ad nostrum!' },
    { title: 'Misión', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi magni enim consectetur quam voluptatem? Dolorem totam, explicabo ducimus voluptatibus temporibus doloremque nisi molestias porro necessitatibus vel. Laboriosam assumenda optio repellat.' },
    { title: 'Visión', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi magni enim consectetur quam voluptatem? Dolorem totam, explicabo ducimus voluptatibus temporibus doloremque nisi molestias porro necessitatibus vel. Laboriosam assumenda optio repellat.' },
    { title: 'Versión', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi magni enim consectetur quam voluptatem? Dolorem totam, explicabo ducimus voluptatibus temporibus doloremque nisi molestias porro necessitatibus vel. Laboriosam assumenda optio repellat.' },
  ];

  return (
    <div className="container">
      <div className="container_home">
        {sections.map((section, index) => (
          <section className='secContainer' key={index}>
            <div className="section_tittle" onClick={() => toggleSection(index)}>
              <h3>{section.title}</h3>
              <img src={Down} alt="" className={activeSections[index] ? 'rotated' : ''} />
            </div>
            <div className='cont_content'>
              <div className={`section_content ${activeSections[index] ? 'active' : ''}`}>
                <p>{section.content}</p>
              </div>
            </div>
            
          </section>
        ))}
      </div>
    </div>
  );
}

export default Home;