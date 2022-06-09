import React from 'react'
import PropTypes from 'prop-types'
/* Todos are the individals tasks you have to do*/
const Todos = props => {
  return (
    <div>Todos</div>
  )
}

Todos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  prio: PropTypes.number,
  Lists: PropTypes.string,
};

export default Todos