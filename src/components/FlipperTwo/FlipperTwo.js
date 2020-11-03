import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './FlipperTwo.css'

function FlipperTwo() {
    
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set(state => !state)}>
        
      <a.div className="cTwo backTwo" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className="cTwo frontTwo" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
          <h1>Movie Saga</h1>
          <p>Information about project</p></a.div>
    </div>
  )
}
export default FlipperTwo;