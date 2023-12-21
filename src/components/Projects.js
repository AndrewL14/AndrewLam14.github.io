import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import personalPortfolioImg from "../assets/img/personal-portfolio.jpg";
import personalContactImg from "../assets/img/personal-contact.jpg";
import movieImg from "../assets/img/Movie-review.jpg";
import graderImg from "../assets/img/grade-tracker.png";
import kindleImg from "../assets/img/kindle-publishing.jpg";
import libraryImg from "../assets/img/Library.jpg";
import musicImg from "../assets/img/music.jpg";
import githubImg from "../assets/icons/git.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Grader",
      description: "Design & Back-end development",
      imgUrl: graderImg,
      link: "https://github.com/AndrewL14/Student-tracker-API",
      linkImg: githubImg
    },
    {
      title: "Kindle Publishing service (Contributed)",
      description: "Back-end Development",
      imgUrl: kindleImg,
      link: "https://github.com/BloomTechBackend/bd-kindle-publishing-service-AndrewL14/tree/trial-1",
      linkImg: githubImg
    },
    {
      title: "Movie review API",
      description: "Built a fully functioning movie review Backend",
      imgUrl: movieImg,
      link: "https://github.com/AndrewL14/Movie-review-api",
      linkImg: githubImg
    },
    {
      title: "Personal Portfolio",
      description: "Design & Front-end Development",
      imgUrl: personalPortfolioImg,
      link: "https://github.com/AndrewL14/AndrewLam14.github.io",
      linkImg: githubImg
    },
    {
      title: "Personal Contacts",
      description: "Back-end Development",
      imgUrl: personalContactImg,
      link: "https://github.com/AndrewL14/contact-book",
      linkImg: githubImg
    },
    {
      title: "Library Service (Contributed)",
      description: "Back-end Development",
      imgUrl: libraryImg,
      link: "https://github.com/BloomTechBackend/bd-sprint-12-challenge-libraryservice-TheProgrammer18/tree/Sprint_12",
      linkImg: githubImg
    },
    {
      title: "Music Playlist Service (Contributed)",
      description: "Back-end Development",
      imgUrl: musicImg,
      link: "https://github.com/BloomTechBackend/bd-working-with-databases-music-playlist-service-TheProgrammer18/tree/trial-1",
      linkImg: githubImg
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div className="animate__animated">
                <h2>Projects</h2>
                <p>Here are all the projects I've either completed or contributed to with their corresponding github link.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className="animate__animated">
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
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
