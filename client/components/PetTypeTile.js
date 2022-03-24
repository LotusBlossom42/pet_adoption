import React from "react"
import { Link } from "react-router-dom"

const PetTypeTile = ({petType: {id, name, imgUrl, description}}) => {

  return (
    <div>
      <Link to={`/pet-types/${id}`}>
        <img className="imgDimensions" src={imgUrl} alt={name} />
      </Link>
      <Link to={`/pet-types/${id}`}>
        <h2 className="petTypeTile">{name}</h2>
      </Link>
      <p>{description}</p>
    </div>
  )
}

export default PetTypeTile
