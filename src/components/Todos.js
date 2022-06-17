import React from "react";
import PropTypes from "prop-types";
/* Todos are the individals tasks you have to do*/


const Todos = ({ todo }) => {
  return (
    <div className={styles.todo1}>
      <input type="checkbox" checked={todo.complete} />
      <p className={styles.todo}>{todo.title}</p>
      <p>{todo.description}</p>
    </div>
  );
};

Todos.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  complete: PropTypes.bool,
};

export default Todos;
