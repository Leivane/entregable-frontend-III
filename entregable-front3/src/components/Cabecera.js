import React from 'react'
import styles from "../index.css"

export default function Cabecera(props) {
  return (
    <header className={styles.header}>
          <h1>Carrito de compras</h1>
          <p>Cantidad de productos: <span>{props.total}</span></p> 
          </header>
  )
}
