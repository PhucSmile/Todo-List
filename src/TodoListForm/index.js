import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import { React, useDispatch } from "react-redux";
import { addList } from "../Redux/listActions";

function TodoListForm() {
    const dispatch = useDispatch();
    const [list, setList] = useState('')

    const HandleSubmit = (e)=> {
        e.preventDefault();
        dispatch(addList(list))
        setList('')
    }


    return ( 
        <>
        <Form className="mx-2 my-2" onSubmit={HandleSubmit}>
        <Form.Group  controlId="inputList">
     <Row>
           <Col md={8}>              
                <Form.Control type="text"
                 placeholder="Vui lòng nhập"
                  required
                  value= {list}
                  onChange={(e) => setList(e.target.value)}
                   />
           </Col>
           <Col md={4}>
            <Button variant='primary' type="submit">Add Item Todo</Button>
           </Col>
     </Row>
      </Form.Group>
        </Form>
        </>
     );
}

export default TodoListForm;