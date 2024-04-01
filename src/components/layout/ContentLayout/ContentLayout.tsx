import Header from '@components/Header/Header'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ContentLayout.module.scss'

const ContentLayout: FC = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.content}>
                <Outlet/>
            </main>
        </div>
    )
}

export default ContentLayout