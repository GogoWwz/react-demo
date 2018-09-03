// react这个包：创建组件、虚拟dom、声明周期
import React from 'react'
import PeopleItem from '@/demo/PeopleCard/PeopleItem'
import classes from '@/css/peoplecard.css'

console.log(classes)
class PeopleCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            peopleList: [
                {id: 1, people: "工藤新一", alias: "真相永远只有一个"},
                {id: 2, people: "服部平次", alias: "新一基友"},
                {id: 3, people: "毛利兰", alias: "角姐"},
                {id: 4, people: "毛利小五郎", alias: "沉睡的小五郎"},
                {id: 5, people: "黑羽快斗", alias: "银翼的魔术师"},
            ]
        }
    }
    render() {
        return (
            <div>
                <h1 className={classes["m-title"]}>名侦探柯南任务表</h1>
                {this.state.peopleList.map(item => <PeopleItem key={item.id} {...item} />)}
            </div>
        )
    }
}

export default PeopleCard