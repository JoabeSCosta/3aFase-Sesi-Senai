import React from 'react'
import './Dados.css'
import { useState } from 'react'

function Dados() {
    const [cardUm, setCardUm] = useState('/Cards/card-Joker.svg')
    const [cardDois, setCardDois] = useState('/Cards/card-Joker.svg')
    const [cardTres, setCardTres] = useState('/Cards/card-Joker.svg')
    const [cardQuatro, setCardQuatro] = useState('/Cards/card-Joker.svg')

    function Roletar() {
   
        const a = Math.floor(Math.random() * 13) + 1
        const b = Math.floor(Math.random() * 13) + 1
        const c = Math.floor(Math.random() * 13) + 1
        const d = Math.floor(Math.random() * 13) + 1

        setCardUm("/Cards/card-"+a+"-clubs.svg")
        setCardDois("/Cards2/card-"+b+"-diamonds.svg")
        setCardTres("/Cards3/card-"+c+"-hearts.svg")
        setCardQuatro("/Cards4/card-"+d+"-spades.svg")
    }

  return (
    <div>
        <h1>Gire as Cartas</h1>
        <img src={cardUm} alt="" onClick={Roletar}/>
        <img src={cardDois} alt="" onClick={Roletar}/>
        <img src={cardTres} alt="" onClick={Roletar}/>
        <img src={cardQuatro} alt="" onClick={Roletar}/>

    </div>
  )
}

export default Dados
