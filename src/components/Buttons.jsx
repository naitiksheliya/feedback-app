import React from 'react'
import PropTypes from 'prop-types'
function Buttons({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}
Buttons.defaultProps={
    version:'primary',
    type:'button',
    isDisabled:true
}
Buttons.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.string.isRequired,
  }
export default Buttons






