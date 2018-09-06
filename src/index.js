// react这个包：创建组件、虚拟dom、声明周期
import React from 'react'
// react-dom这个包：负责render
import ReactDOM from 'react-dom'
// 引入全局css
import 'antd/dist/antd.css'

// import Hello from '@/components/Hello'
// import PeopleCard from '@/demo/PeopleCard/PeopleCard'
import Home from '@/views/Home/Home'

ReactDOM.render(<Home />, document.getElementById("app"))