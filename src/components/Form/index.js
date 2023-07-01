import React, { useState } from "react";

const Form = () => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        }   else if (amount < 1) {
            alert("O valor tem que ser positivo");
            return;
        }
    };

    
    return(
        <>
            <container>
                    <radioGroup >
                            <input
                            type="radio"
                            id="rIncome"
                            defaultChecked
                            name="group1"
                            onChange={() => setExpense(!isExpense)}
                            />
                            <label htmlFor="rIncome">Receita</label>
                            <input
                            type="radio"
                            id="rExpense"
                            name="group1"
                            onChange={() => setExpense(!isExpense)}
                            />
                            <label htmlFor="rExpense">Gasto</label>
                        </radioGroup>
                        <inputContent >
                        <label>Valor: </label>
                            <input 
                            value={amount} 
                            type="number"
                            onChange={(e) => setAmount (e.target.value)} 
                            />
                        </inputContent>
                        <inputContent >
                        <label>Descrição: </label>
                            <input value={desc} onChange={(e) => setDesc (e.target.value)} />
                        </inputContent>
                        <button onClick={{handleSave}}>ADICIONAR</button>
                        
            </container>
        </>
    );
};

export default Form;