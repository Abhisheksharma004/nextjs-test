import React from "react";

export default function Layout ({children}: Readonly<{children: React.ReactNode}>) {
    return(
        <>
            {children}
            <h1>Hello Layout</h1>
        </>
    )
}