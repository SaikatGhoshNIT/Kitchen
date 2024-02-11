import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError();
  return (
    <div>
        <h2>Page not found !!!</h2>
        <h4>{err.status} : {err.statusText}</h4>
    </div>
  )
}

export default Error;