import React from 'react'
import classes from './MenuToggle.css'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle,
    'fa'
  ];

  if (props.isOpen) {
    cls.push('fa-times');
    cls.push(classes.open)
  } else {
    cls.push('fa-bars')
  }

  console.log('menu toggle work!');

  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
};

export default MenuToggle