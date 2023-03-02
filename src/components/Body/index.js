import { useState } from "react";
import { Form , Button } from "react-bootstrap";
import "./index.css"

export function Body() {
  const [task, setTask] = useState("")
  const [ description, setDescription] = useState("")
  const [ dataAtual, setDataAtual] = useState("")
  const [ dataFinal, setDataFinal] = useState("")
  const [ tasks, setTasks] = useState([])

 



  return (
    <main className="centro">
    <div className="div">
    <Form size="sm">
      <Form.Group className="input-task" controlId="taskForm.ControlInput1" >
        <Form.Label>Tarefa</Form.Label>
        <Form.Control  placeholder="Tarefas" value={task} onChange={(e) => setTask(e.target.value)} />
      </Form.Group>
      <Form.Group className="input-description" controlId="description.ControlInput2">
        <Form.Label>Descrição</Form.Label>
        <Form.Control placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group  controlId="data.ControlInput2">
        <Form.Label>Data Atual</Form.Label>
        <Form.Control type="date" value={dataAtual} onChange={(e) => setDataAtual(e.target.value)} />
      </Form.Group>
      <Form.Group  controlId="dataFinal.ControlInput2">
        <Form.Label>Data Final</Form.Label>
        <Form.Control type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} />
      </Form.Group>

      <Button variant="success">Adicionar</Button>
    </Form>
    </div>
    </main>
  );
}
