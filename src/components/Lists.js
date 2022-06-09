import React from 'react'
import Todos from './Todos'
import PropTypes from 'prop-types'

const Lists = ({todos}) => {
  return (
    todos.map(todo => {
      return <Todos key={todo.id} todo={todo}></Todos>
    })
  )
}

Lists.propTypes = {
    todos: PropTypes.string.isRequired,
}

export default Lists