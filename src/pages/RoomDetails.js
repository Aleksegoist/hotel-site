import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from '../context/RoomContext';

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  // destructure room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/60'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {name} Details
        </h1>
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          <div className='w-full h-full lg:w-[60%] px-6 bg-yellow-100'>
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt='img room' />
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                sint voluptate facere quisquam in iure. Tempore, quo. Magni
                fugit saepe dolore, incidunt, mollitia delectus quam possimus
                sit, praesentium maxime beatae?
              </p>
              <div>
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div key={index}>
                      <div className='text-3xl text-accent'>{icon}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='w-full h-full lg:w-[40%] bg-blue-300'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            labore, iure voluptatem excepturi ad doloribus quaerat earum
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
