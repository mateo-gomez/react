import React from 'react'
import './search.css'

// export default function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = (props) => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
    >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Buscar video"
      className="Search-input"
      name="search"
      // defaultValue="Luis Fonsi"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search
