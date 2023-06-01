import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function BlogCards(props) {


    return (
        <div className='blogcard padding-bottom padding-top'>
            <Container>
                <Row>
                    <Col>
                    <a href={props.Cards.Card1.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card1.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card1.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card1.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card2.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card2.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card2.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card2.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card3.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card3.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card3.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card3.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href={props.Cards.Card4.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card4.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card4.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card4.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card5.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card5.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card5.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card5.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card6.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card6.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card6.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card6.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href={props.Cards.Card7.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card7.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card7.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card7.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card8.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card8.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card8.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card8.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card9.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card9.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card9.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card9.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href={props.Cards.Card10.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card10.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card10.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card10.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card11.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card11.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card11.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card11.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card12.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card12.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card12.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card12.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <a href={props.Cards.Card13.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card13.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card13.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card13.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card14.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card14.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card14.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card14.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                    <Col>
                    <a href={props.Cards.Card15.link} style={{ textDecoration: 'none' }}>
                        <div className="featured-blog-card mb-3 card-blog text-left">
                            <div className="featured-blog-card-header">
                                <img src={props.Cards.Card15.image} alt=''style={{height:"240px"}}/>
                                <div className="featured-blog-card-icon">
                                    <div className="blog-card-icon-1">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '30px' }} width="16" height="16" fill="currentColor" class="biii bi-filter-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top text-left">
                            <Card.Body>
                                <Card.Title className='color-bule'>{props.Cards.Card15.title}</Card.Title>
                                <Card.Text>
                                    {props.Cards.Card15.discription}
                                </Card.Text>
                                <Button variant="light">Read More</Button>
                            </Card.Body>
                            </div>
                        </div>

                    </a>
                    </Col>
                </Row>
                
            </Container>
        </div>

    );
}

export default BlogCards