
import { Card } from "react-bootstrap";
import TodoListForm from "../TodoListForm";
import TodoListList from "../Component/TodoListList";
function HomeScreen() {
    return ( 
    <>
        <h1 className="text-center text-info">To Do List</h1>
        <Card>
            <Card.Header>
                A to do list using React, redux
            </Card.Header>
            {/* input */}
                <TodoListForm />
        </Card>
        <h1 className="text-center text-info">You List</h1>
        <TodoListList/>
    </> 
    );
}

export default HomeScreen;