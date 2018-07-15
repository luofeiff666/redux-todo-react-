import React from 'react'
import ActveStatus from '../container/ActveStatus'
const Footer = () => {
  return (
    <div>
      <div>待完成的个数：</div>
      <div>show mode：
        <ActveStatus filter="ALL">全部</ActveStatus>
        <ActveStatus filter="UNFINISH">未完成</ActveStatus>
        <ActveStatus filter="FINISH">已完成</ActveStatus>
      </div>
    </div>
  )
}
export default Footer