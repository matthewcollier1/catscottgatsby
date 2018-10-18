import React from 'react'

import buttonStyles from './button.module.css'

export default ({ children }) => (
  <button className={buttonStyles.button}>{children}</button>
)
