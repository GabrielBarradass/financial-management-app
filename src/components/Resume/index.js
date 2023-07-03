import React from "react";
import { ResumeItem } from "../ResumeItem";

export const Resume = ({ income, expense, total }) => {
    return(
        <div>
            <ResumeItem title="Receitas do mês" value={income}/>
            <ResumeItem title="Gastos do mês" value={expense}/>
            <ResumeItem title="Total" value={total}/>
        </div>
    )
}