// react这个包：创建组件、虚拟dom、声明周期
import React from 'react'
// react-dom这个包：负责render
import ReactDOM from 'react-dom'

// import Hello from '@/components/Hello'
import PeopleCard from '@/demo/PeopleCard/PeopleCard'

ReactDOM.render(<PeopleCard />, document.getElementById("app"))