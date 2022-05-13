import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "../asset/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Container, Row, Col, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import {CartPlusFill} from 'react-bootstrap-icons';

function Home() {
  return (      
    <div className="wrapper">
        <Header tab="X-trem Movie Hub"/>
        <div class="carousel">
        <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='https://wallpaperbat.com/img/282369-poster-movie-film-movies-posters-wallpaper-5120x2880-859165.jpg'
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://images6.fanpop.com/image/photos/37800000/The-Hobbit-The-Battle-Of-The-Five-Armies-Banner-HD-the-hobbit-37844505-2284-1050.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://moviegalleri.net/wp-content/gallery/acharya-first-look/Chiranjeevi-Acharya-First-Look-HD-Wallpaper.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://livecinemanews.com/wp-content/uploads/2021/01/ErncsUcVQAAjDnj.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.kerala9.com/wp-content/uploads/2022/02/bheeshma-parvam-movie-posters-HD.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        <div class="middle-view" id='movie-list'>
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg" />
                        <Card.Body style={{ color:'#0c141c'}}>
                            <Card.Title>Movie Name</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="secondary" size="sm" style={{ width:'15rem', marginLeft:'0.5rem'}}>Add To Cart <CartPlusFill/></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.wallpapersafari.com/71/79/ABPkK1.jpg" />
                        <Card.Body>
                            <Card.Title>Movie Name</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="secondary" size="sm" style={{ width:'15rem', marginLeft:'0.5rem'}}>Add To Cart <CartPlusFill/></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://wallpapercave.com/wp/wp4399797.jpg" />
                        <Card.Body>
                            <Card.Title>Movie Name</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="secondary" size="sm" style={{ width:'15rem', marginLeft:'0.5rem'}}>Add To Cart <CartPlusFill/></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;