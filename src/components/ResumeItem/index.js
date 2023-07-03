import React from "react";

export const ResumeItem = ({title, value}) => {
    return(
        <container>
            <header>
                <headerTitle>{title}</headerTitle>
            </header>
            <total>{value}</total>
        </container>
    )
}