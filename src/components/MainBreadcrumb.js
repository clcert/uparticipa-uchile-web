import React from 'react'

const MainBreadcrumb = ({breadCrumbsList}) => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        {
          breadCrumbsList.map( (element, i) => (
            <li key={i} className={
              i > 0 ? "is-hidden-mobile" : ""
            }>{element}</li>
          ))
        }
      </ul>
    </nav>
  )
}

export default MainBreadcrumb