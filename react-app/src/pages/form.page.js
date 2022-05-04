import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FullContainer } from "components/containers";
import { Form, TextArea } from "components/forms";

export const FormDeal = ({onAddDeal, deals, onEdit}) => {
    const { id = '' } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState();
    useEffect(() => {
        try{
            if(id){
                const {text} = deals.find((deal) => deal.id === id);
                setText(text);
            } 
        }catch(_){}
    }, [])

    const onSave = (e) => {
        e.preventDefault();
        console.log(text);
        onAddDeal(text);
        navigate("/");
    };

    const onUpdate = () => {
        onEdit({id, text})
        navigate("/");
    }
    const onInput = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    return (
        <FullContainer>
            <Form onSubmit={id ? onUpdate : onSave}>
                <TextArea value={text} onInput={onInput}/>
                <br />
                <button>Save</button>
            </Form>
        </FullContainer>
    )
}