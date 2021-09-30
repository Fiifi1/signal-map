import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footer_styles.js";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#235", textAlign: "center", marginBottom : "50px", marginTop: "-40px" }}>
        CONNECT UG: The gateway to signal analysis!
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Thesis</Heading>
            <FooterLink>
              <Link to="/slide">Presentation</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/literature">Literature</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/excel">Raw Data</Link>
            </FooterLink>
          </Column>

          <Column>
            <Heading>Contributors</Heading>
            <FooterLink>
              <Link to="/AboutSupervisor">Supervisor</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/AboutSupervisor">
                <Link to="/AboutStudent">Students</Link>
              </Link>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Follow us</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-google">
                <span style={{ marginLeft: "10px" }}>Google</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
