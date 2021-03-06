import React, {useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {Trans, useTranslation} from 'react-i18next';
import {Col, Container, Navbar, Row} from "react-bootstrap";
import ShowAdSense from "./ShowAdSense";
import money from "../money.png";
import InnerHeader from "./InnerHeader";

export default function Home() {
  const [index, setIndex] = useState<number>(0);
  const { t } = useTranslation();
  const words: string[] = [t('Home.places.dinner'), t('Home.places.lunch'), t('Home.places.events')];
  const mainBoxes = useMemo(() => {
    return (<Row className="gx-3">
        <Col md={6} lg={6} className="text-center pb-3">
          <div className="organize-box px-3 py-5 position-relative">
            <Link className="text-reset text-decoration-none stretched-link" to="/admin-page">
              <h2 className="display-5"><Trans i18nKey="Home.checkerTitle" /></h2>
            </Link>
            <p className="lead"><Trans i18nKey="Home.checkerBody" /></p>
          </div>
        </Col>
        <Col md={6} lg={6} className="text-white text-center pb-3">
          <div className="settings-box px-3 py-5 position-relative">
            <Link className="text-reset text-decoration-none stretched-link" to="/user-page">
              <h2 className="display-5"><Trans i18nKey="Home.userTitle" /></h2>
            </Link>
            <p className="lead"><Trans i18nKey="Home.userBody" /></p>
          </div>
        </Col>
      </Row>)
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % words.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index, words.length]);

  return (
    <>
      <InnerHeader />
      <Container fluid className="p-md-5 mb-3 text-center main-image align-middle">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div>
              <h1 className="display-1">Splittami</h1>
              <p className="lead">
                <Trans i18nKey="Home.slogan" /> <span className="text-success">{words[index]}</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <ShowAdSense show={false} />
          </Col>
        </Row>
        {mainBoxes}
      </Container>
    </>
  );
}
