import { ReactNode } from "react";

export default function Layout({children} : Readonly<{children: ReactNode}>) {
    return(
        <>
         {children}
         <h1>Docs Page for own layout</h1>
        </>
    )
}