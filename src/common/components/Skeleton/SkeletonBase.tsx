import React from 'react'

interface Props {
  type: string;
}

function SkeletonBase({type}: Props) {
  const classes = `skeleton ${type}`;
  return (
    <div className={classes}></div>
  )
}

export default SkeletonBase