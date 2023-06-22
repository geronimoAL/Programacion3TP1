import React from 'react'

export const InputDate = () => {
  const maxFecha="2025-05-05"
  return (
    <input type="date" id="start" name="trip-start"
       min="2023-01-01" max={maxFecha}/>
  )
}
