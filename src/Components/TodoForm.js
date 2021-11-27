import React,{useState} from "react";
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    Button
} from "reactstrap";

import { v4 } from "uuid";

const TodoForm = ({addTodos}) => {

    const [todoString, setTodoString] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(todoString === "") {
            return alert("Please add something");
        }

        const todo = {
            todoString,
            id: v4()
        }

        addTodos(todo);
        setTodoString("");
    }


    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input 
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Add a task"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon>
                        <Button color="info">Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;