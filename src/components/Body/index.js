import { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import "./index.css";

export function Body() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [dataAtual, setDataAtual] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [tasks, setTasks] = useState([]);

  const Clear = () => {
    setTask("");
    setDescription("");
    setDataAtual("");
    setDataFinal("");
  };

  const AddTask = () => {
    setTasks([
      {
        task: task,
        description: description,
        dataAtual: dataAtual,
        dataFinal: dataFinal,
      },
      ...tasks,
    ]);
    Clear();
  };

  const RemoveTask = () => {
    setTasks([]);
  };

  return (
    <main className="centro">
      <div className="div">
        <Form size="sm">
          <Form.Group className="input-task" controlId="taskForm.ControlInput1">
            <Form.Label>Tarefa</Form.Label>
            <Form.Control
              placeholder="Tarefas"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="input-description"
            controlId="description.ControlInput2"
          >
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="data.ControlInput2">
            <Form.Label>Data Atual</Form.Label>
            <Form.Control
              type="date"
              value={dataAtual}
              onChange={(e) => setDataAtual(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="dataFinal.ControlInput2">
            <Form.Label>Data Final</Form.Label>
            <Form.Control
              type="date"
              value={dataFinal}
              onChange={(e) => setDataFinal(e.target.value)}
            />
          </Form.Group>
          <Button className="btn_add" variant="success" onClick={AddTask}>
            Adicionar
          </Button>
          <Button className="btn_remove" variant="danger" onClick={RemoveTask}>
            Limpar Lista
          </Button>
        </Form>
        {tasks.map((task) => {
          return (
            <>
              <ListGroup>
                <ListGroup.Item className="lista">
                  <h2>{task.task}</h2>
                  <br />
                  <h3>{task.description}</h3>
                  <br />
                  <h4>{task.dataAtual}</h4>
                  <br />
                  <h4>{task.dataFinal}</h4>
                  <br />
                </ListGroup.Item>
              </ListGroup>
            </>
          );
        })}
      </div>
    </main>
  );
}
