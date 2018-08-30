import React from 'react'
import styles from './styles'

function PeopleItem(props) {
    return (
        <div style={styles.item}>
            <h2 style={styles.user}>人物：{props.people}</h2>
            <p style={styles.content}>人物人物：{props.alias}</p>
        </div>
    )
}

export default PeopleItem