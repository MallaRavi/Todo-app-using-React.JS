import React from 'react'
import '../styles/foot.css'

function Footbar() {
  return (
    <div className='footbar-container'>
      <div className='section-1'>
        <ul>
            <li className='footbar-heading item'>Learning</li>
            <li className='item'><a href='/'>Home</a></li>
            <li className='item'>Documentaion</li>
        </ul>
      </div>
      <div className='section-2'>
        <ul>
          <li className='footbar-heading item'>Links</li>
          <li className='item'><a href='/'>Feautures</a></li>
          <li className='item'><a href='/'>Testinomials</a></li>
          <li className='item'><a href='/'>Privacy</a></li>
          <li className='item'><a href='/'>Terms of use</a></li>
        </ul>
      </div>
      <div className='section-3'>
        <ul>
          <li className='item'><a href='/createTodo' className='footbar-heading'>Todo</a></li>
          <li className='item'><p>Todo list, free of charge. Without registration.</p></li>
          <li className='item'>&copy; 2024 by ravi.</li>
        </ul>
      </div>
    </div>
  )
}

export default Footbar
