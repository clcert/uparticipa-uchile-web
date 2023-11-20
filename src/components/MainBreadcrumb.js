import React from 'react'

const MainBreadcrumb = ({breadCrumbsList}) => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        {
          breadCrumbsList.map( (element, i) => (
            <li key={i}>{element}</li>
          ))
        }
      </ul>
    </nav>
  )
}

export default MainBreadcrumb