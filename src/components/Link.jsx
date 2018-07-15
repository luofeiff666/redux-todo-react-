import React from 'react'
const Link = ({ active, children, onClick }) => {
  return <span onClick={onClick} style={{ color: active ? 'red' : 'black' }}>{children}</span>
}
export default Link