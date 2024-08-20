"use client"
import store from "@/public/src/app/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const SessionWrapper = ({children}) => {
  return (
    <SessionProvider>
     <Provider store={store}>
     {children}
     </Provider>
    </SessionProvider>
  )
}

export default SessionWrapper