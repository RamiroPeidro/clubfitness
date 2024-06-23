'use client';
import React from 'react'
import styles from './style.module.css';

export default function index({index, title, setModal}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2 className='text-3xl md:text-7xl transition-all '>{title}</h2>
            <p className='hidden md:block'>Diseño gráfico & Branding</p>
        </div>
    )
}
