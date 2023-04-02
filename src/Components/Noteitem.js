import React from 'react'

export default function Noteitem(props) {
  const { note } = props;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
        
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sit molestiae incidunt voluptas exercitationem iure non molestias amet velit labore atque excepturi nam vero, est numquam mollitia illo cumque quia autem pariatur voluptate! Doloribus.

            </p>
          </div>
      </div>
    </div>
  )
}
