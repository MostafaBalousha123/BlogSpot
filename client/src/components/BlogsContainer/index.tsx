import { FC } from 'react'
import BLog from '../Blog'
import './style.css'

const CardsContainer:FC = () => (
  <div className="cards-container">
    <BLog />
    <BLog />
    <BLog />
    <BLog />
  </div>
)

export default CardsContainer
