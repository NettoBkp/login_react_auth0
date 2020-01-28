import React from "react"
import { navigate } from "gatsby"

import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="artsystem.auth0.com"
    auth0_client_id="CmrZFJJjlWuphNeA1WFefqpE5KXIzZ1M"
  >
    {element}
  </AuthProvider>
)
