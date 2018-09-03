import React from 'react'
import classes from '@/css/peoplecard.scss'

function PeopleItem(props) {
    return (
        <div className={classes["m-item"]}>
            <h2 className={classes["m-user"]}>人物：{props.people}</h2>
            <p className={classes["m-content"]}>人物人物：{props.alias}</p>
        </div>
    )
}

export default PeopleItem