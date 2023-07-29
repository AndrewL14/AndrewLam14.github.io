import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import githubImg from "../assets/icons/git.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      description: "Design & Front-end Development",
      imgUrl: projImg1,
      link: "https://github.com/AndrewL14/AndrewLam14.github.io",
      linkImg: githubImg
    },
    {
      title: "Movie review API",
      description: "Designed a fully functioning movie review Backend",
      imgUrl: projImg2,
      link: "https://github.com/AndrewL14/Movie-review-api",
      linkImg: githubImg
    },
    {
      title: "Personal Contacts",
      description: "Back-end Development",
      imgUrl: projImg2,
      link: "https://github.com/AndrewL14/contact-book",
      linkImg: githubImg
    },
    {
      title: "Kindle Publishing service (Contributed)",
      description: "Back-end Development",
      imgUrl: projImg1,
      link: "https://github.com/BloomTechBackend/bd-kindle-publishing-service-AndrewL14/tree/trial-1",
      linkImg: githubImg
    },
    {
      title: "Library Service (Contributed)",
      description: "Back-end Development",
      imgUrl: projImg2,
      link: "https://github.com/BloomTechBackend/bd-sprint-12-challenge-libraryservice-TheProgrammer18/tree/Sprint_12",
      linkImg: githubImg
    },
    {
      title: "Music Playlist Service (Contributed)",
      description: "Back-end Development",
      imgUrl: projImg3,
      link: "https://github.com/BloomTechBackend/bd-working-with-databases-music-playlist-service-TheProgrammer18/tree/trial-1",
      linkImg: githubImg
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are all the projects I've either created or contributed to with their corresponding github link.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Nothing here.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Nothing here either, I just put 3 tabs, cause it looked cool.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
