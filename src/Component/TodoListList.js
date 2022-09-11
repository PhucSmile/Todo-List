import {  Row, Col, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Message from "./Message/message";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { removeList, addDone, addUnDone } from "../Redux/listActions";


function TodoListList() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todoItems)
    const {todoList, repeat} = data

    // handlleRemove
    const HandleRemove = (name) => {
        dispatch(removeList(name))
    }

    // handle complete
    const handleComplete = (name) => {
        dispatch(addDone(name))
    }
    const HandleUncomplete = (name) => {
        dispatch(addUnDone(name))
    }
    

    if(todoList.length > 0) {
        return ( 
          <>
              
                {repeat && <Message variant='danger'>Dữ liệu này đã có vui lòng nhập dữ liệu mới</Message>}
                <ListGroup > 
                    {todoList.map((list) => 
                         <ListGroup.Item key={list.name} variant={ list.complete !== true ? 'success' : 'dark'}>
                         <Row>
                             <Col md={8} xs={8}>
                                 -{list.name}
                             </Col>
                             <Col md={2} xs={2}>


                                {/* Complete  */}   
                                {
                                list.complete === true ? (
                                    <Button variant="danger" onClick={()=> HandleUncomplete(list.name)}>
                                    <i class="fa-solid fa-eraser"></i>
                                    </Button>
                                    
                                ) : (
                                    <Button variant="success" onClick={()=> handleComplete(list.name)}>
                                     <i className="fa-solid fa-circle-check"></i>
                                     </Button>
                                )
                                }
                                

                             </Col>
                             <Col md={2} xs={2}>
                                 <Button variant="danger" onClick={()=> HandleRemove(list.name)}>
                                 <i className="fa-solid fa-trash-can"></i>
                                 </Button>
                             </Col>
                         </Row>
                        </ListGroup.Item>
                    )}
                </ListGroup>
          </>
             );
    } else {
        return (
            <ListGroup>
                <ListGroup.Item variant="danger" className="text-center">
                    Chưa có dữ liệu
                </ListGroup.Item>
            </ListGroup>
        )
    }
    
}

export default TodoListList;