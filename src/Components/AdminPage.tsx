import React, {useState} from "react";
import {Button, Card, Col, Container, ListGroup, ListGroupItem, Modal, Row} from "react-bootstrap";
import InnerHeader from "./InnerHeader";
import {QrcodeScannerPlugin} from "./QrcodeScannerPlugin";
import {UserConfiguration} from "../interfaces/UserConfiguration";
import calculate from "../utils/calculate";

const testInitialUserConfiguration: UserConfiguration[] = [{
  name: 'P',
  alreadyPutted: 3000,
  maxToPut: null
}, {
  name: 'G',
  alreadyPutted: 1000,
  maxToPut: 1500
}, {
  name: 'L',
  alreadyPutted: 2000,
  maxToPut: 500
}];

export default function AdminPage() {
  const [originaUsers, setOriginalUsers] = useState<Array<UserConfiguration>>(testInitialUserConfiguration);
  const [users, setUsers] = useState<Array<UserConfiguration>>(testInitialUserConfiguration);
  const [showModal, setShowModal] = useState(false);
  const [slaveToEdit, setSlaveToEdit] = useState<number|null>(null);

  const openModalEditSlave = (indexToChange: number) => {
    setShowModal(true);
    setSlaveToEdit(indexToChange);
  };

  const openModalAddSlave = () => {
    setShowModal(true);
  };

  const removeSlave = (indexToRemove: number) => {
    originaUsers.splice(indexToRemove, 1);
    setUsers([...originaUsers]);
    setOriginalUsers([...originaUsers]);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const doCalculaton = () => {
    const newUsersConf: UserConfiguration[] = calculate(users);

    console.log(newUsersConf);

    setUsers(newUsersConf);
  };

  const eraseSlaves = () => {
    setUsers([]);
    setOriginalUsers([]);
  };

  const onQrcodeScanned = (qrCodeScanned: string) => {
    handleClose();

    const jsonDecoded: UserConfiguration = JSON.parse(atob(qrCodeScanned));

    if (slaveToEdit !== null) {
      originaUsers[slaveToEdit] = jsonDecoded;
    } else {
      originaUsers.push(jsonDecoded);
    }
    setUsers([...originaUsers]);
    setOriginalUsers([...originaUsers]);
    setSlaveToEdit(null);
  };

  const codesDoms = users.map((user, index) => {
    const alreadyPutted = user.alreadyPutted === null ? '-' : user.alreadyPutted / 100;
    const maxToPut = user.maxToPut === null ? '-' : (user.maxToPut / 100).toFixed(2);
    const diffToPut = user.alreadyPutted - user.toPut!;
    const toPutDom = user.toPut
      ? diffToPut > 0
        ? <span className="text-danger">{(diffToPut / 100).toFixed(2)} €</span>
        : <span className="text-success">{(diffToPut / 100).toFixed(2)} €</span>
      : null;

    return (<Col key={index} className="py-3" xs={12} md={4}>
      <Card>
        <Card.Header className={"card-header d-flex justify-content-between align-items-center"}>
          <Card.Title>{user.name}</Card.Title>
          <Card.Title >{toPutDom}</Card.Title>
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Already putted: <strong>{alreadyPutted}</strong> €</ListGroupItem>
          <ListGroupItem>Max: <strong>{maxToPut}</strong> €</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="secondary" size={'sm'} onClick={() => openModalEditSlave(index)}>Change</Button>
          <Button variant="danger" size={'sm'} onClick={() => removeSlave(index)}>Remove</Button>
        </Card.Body>
      </Card>
    </Col>);
  });

  return <div>
    <InnerHeader/>
    <Container className="py-3">
      <Row>
        <Col sm={12}>
          <Button variant="primary" size={'sm'} className={'mr-1'} onClick={openModalAddSlave}>Add slave</Button>
          <Button variant="danger" size={'sm'} onClick={eraseSlaves}>Erase</Button>
          <Row className="py-3">
            {codesDoms}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Button variant="success" onClick={doCalculaton}>Calculate</Button>
        </Col>
      </Row>
    </Container>

    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Scan code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QrcodeScannerPlugin onQrcodeScanned={onQrcodeScanned} />
      </Modal.Body>
    </Modal>
  </div>;
}
