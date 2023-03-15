import { useState } from "react";
import { Form, Button, ListGroup, Alert } from "react-bootstrap";
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

  const DataAtual = () => {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    if (mes < 10) {
      return ano + "-" + "0" + mes + "-" + dia;
    }
    return ano + "-" + mes + "-" + dia;
  };

  const AddTask = () => {
    if (
      task === "" &&
      description === "" &&
      dataAtual === "" &&
      dataFinal === ""
    ) {
      alert("Todos os Campos São Obrigatorio");
    } else {
      setTasks([
        {
          task: task,
          description: description,
          dataAtual: DataAtual(),
          dataFinal: dataFinal,
        },
        ...tasks,
      ]);
      Clear();
    }
  };

  const RemoveTask = () => {
    setTasks([]);
  };

  return (
    <main className="centro">
      <div className="div">
        <Form size="sm">
          <Form.Group className="input-task" controlId="taskForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Tarefa"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="input-description"
            controlId="description.ControlInput2"
          >
            <Form.Label></Form.Label>
            <Form.Control
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="dataFinal.ControlInput2">
            <Form.Label></Form.Label>
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
              <ul className="lista">
                <li>
                  <h3>
                    <h2>Tarefa:</h2>
                    {task.task}
                  </h3>
                  <br />
                </li>
                <li>
                  <h3>
                    <h2>Descrição:</h2>
                    {task.description}
                  </h3>
                  <br />
                </li>
                <li>
                  <h4>
                    <h3>Data Atual:</h3>
                    {task.dataAtual}
                  </h4>
                  <br />
                </li>

                <h4>
                  <h3>Data Final:</h3>
                  {task.dataFinal}
                </h4>
                <br />
              </ul>
            </>
          );
        })}
      </div>
    </main>
  );
}
