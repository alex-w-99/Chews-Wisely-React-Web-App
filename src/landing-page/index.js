import {Link} from "react-router-dom";
import {Button, Card, Container, Nav, Navbar} from "react-bootstrap";
import "./index.css"
import {useSelector} from "react-redux";

function LandingPage() {
    const { currentUser } = useSelector(state => state.users);

    return (
        <>
            <Container className="my-5">
                <Card>
                    <Card.Img variant="top" src="../images/1Foxby.jpg" />
                    <Card.Body>
                        <Card.Title className="display-4 text-center my-5">Welcome to Our Site</Card.Title>
                        <div>
                            <p>Welcome to Chews Wisely! Our site is a platform designed for food enthusiasts, whether you're a foodie or a restaurant owner. We are a Yelp clone that offers three different user types: Business, Critique, and Normal User.</p>

                            <p>As a business owner, you can take advantage of our site to showcase your menu, location, and reviews posted by other users. You can also connect with your customers by responding to reviews and addressing any concerns they might have.</p>

                            <p>Critiques, on the other hand, have a unique feature where they can post verified reviews for businesses and earn a higher level of posting and verification status. This feature ensures that the reviews posted on our site are genuine, fair, and trustworthy.</p>

                            <p>Lastly, our normal users have the ability to follow other users who share similar taste in food or visit the same restaurants. They can also post reviews occasionally and enjoy reading other users' reviews and ratings.</p>

                            <p>At Chews Wisely, we strive to create a community of food lovers who are passionate about sharing their experiences with others. So, come and join us on this gastronomic adventure and start exploring the best restaurants around!</p>
                        </div>
                    </Card.Body>
                </Card>
                <div className="container">
                    <h3 className="sticky-top bg-white py-4">Meet the Devs</h3>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <div className="card border-0 mb-4 shadow-sm">
                            <img className="card-img-top" src="https://picsum.photos/200/150" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Alex</h5>
                                <p className="card-text">Check out my profile</p>
                            </div>
                            <div className="card-footer bg-transparent d-grid">
                                <a href="/profile/64455849bbae6627cae7c36e" className="btn btn-primary">View Profile</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 mb-4 shadow-sm">
                            <img className="card-img-top" src="https://picsum.photos/200/150" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Melissa</h5>
                                <p className="card-text">Check out my profile</p>
                            </div>
                            <div className="card-footer bg-transparent d-grid">
                                <a href="/profile/6445594abbae6627cae7c371" className="btn btn-primary">View Profile</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 mb-4 shadow-sm">
                            <img className="card-img-top" src="https://picsum.photos/200/150" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Mohammed Amer</h5>
                                <p className="card-text">Check out my profile</p>
                            </div>
                            <div className="card-footer bg-transparent d-grid">
                                <a href="/profile/64455927bbae6627cae7c370" className="btn btn-primary">View Profile</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card border-0 mb-4 shadow-sm">
                            <img className="card-img-top" src="https://picsum.photos/200/150" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Sarah</h5>
                                <p className="card-text">Business profile Example</p>
                            </div>
                            <div className="card-footer bg-transparent d-grid">
                                <a href="/profile/64455979bbae6627cae7c372" className="btn btn-primary">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Container>

            <Navbar bg="light" expand="lg" fixed="bottom">
                <Container>
                    <Navbar.Brand>Chews Wisely</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        </Nav>

                        <Nav>
                            {
                                currentUser
                                ?
                                <div>
                                    <Button variant="outline-success" as={Link} to="/profile">
                                        Profile
                                    </Button>
                                </div>
                                :
                                <div>
                                    <Button variant="outline-success" as={Link} to="/register">
                                        Sign Up
                                    </Button>

                                    <Button variant="outline-primary" className="ms-3" as={Link} to="/login">
                                        Log In
                                    </Button>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default LandingPage;

