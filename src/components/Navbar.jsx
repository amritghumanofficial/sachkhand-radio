import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/sackhand-radio.svg";
import "../styles/navbar.css" // External css

// const CustomNavbar = () => {
//   return (
//     <>
//       {/* Responsive Navbar with Offcanvas */}
//       <Navbar key="lg" bg="dark" variant="dark" expand="lg" className="mb-3  luxury-navbar">
//         <Container fluid>
//           {/* Brand Logo */}
//           <Navbar.Brand as={Link} to="/">
//             <img src={logo} alt="Sachkhand Radio" style={{ width: "103px", height: "40px" }} />
//           </Navbar.Brand>

//           {/* Offcanvas Toggle Button */}
//           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />

//           {/* Offcanvas Navbar (Left Side) */}
//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-lg`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//             placement="start" // 👈 This makes it open from left side
//           >
//             <Offcanvas.Header closeButton className="bg-dark text-white">
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
//                 Menu
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body className="bg-dark">
//               <Nav className="justify-content-start flex-grow-1 pe-3 ">
//                 <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
//                 <Nav.Link as={Link} to="/live-kirtan" className="text-white">Live Kirtan</Nav.Link>
//                 <Nav.Link as={Link} to="/hukamnama" className="text-white">Hukamnama Sahib</Nav.Link>
//                 <Nav.Link as={Link} to="/katha" className="text-white">Katha</Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default CustomNavbar;





// const CustomNavbar = () => {
//   const [showOffcanvas, setShowOffcanvas] = useState(false);

//   return (
//     <Navbar key="lg" bg="dark" variant="dark" expand="lg" className="mb-3 luxury-navbar">
//       <Container fluid>
//         <Navbar.Brand as={Link} to="/">
//           <img src={logo} alt="Sachkhand Radio" style={{ width: "103px", height: "40px" }} />
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={() => setShowOffcanvas(true)} />

//         <Navbar.Offcanvas
//           id="offcanvasNavbar-expand-lg"
//           aria-labelledby="offcanvasNavbarLabel-expand-lg"
//           placement="start"
//           show={showOffcanvas}
//           onHide={() => setShowOffcanvas(false)}
//         >
//           <Offcanvas.Header closeButton className="bg-dark text-white">
//             <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">Menu</Offcanvas.Title>
//           </Offcanvas.Header>
          /*{ <Offcanvas.Body className="bg-dark">
            <Nav className="justify-content-start flex-grow-1 pe-3 me-auto">
              <Nav.Link as={Link} to="/" className="text-white" onClick={() => setShowOffcanvas(false)}>Home</Nav.Link>
              <Nav.Link as={Link} to="/live-kirtan" className="text-white" onClick={() => setShowOffcanvas(false)}>Live Kirtan</Nav.Link>
              <Nav.Link as={Link} to="/hukamnama" className="text-white" onClick={() => setShowOffcanvas(false)}>Hukamnama Sahib</Nav.Link>
              <Nav.Link as={Link} to="/katha" className="text-white" onClick={() => setShowOffcanvas(false)}>Katha</Nav.Link>
            </Nav>
          </Offcanvas.Body> }*/

//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// };


// export default CustomNavbar;



function CustomNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="luxury-navbar">
      <Container fluid>

        {/* Brand Logo (Left) */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Sachkhand Radio" style={{ width: "103px", height: "40px" }} />
        </Navbar.Brand>

        {/* Toggle button for Mobile */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setShowOffcanvas(true)} />

        {/* ✅ Offcanvas — Only for Mobile */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
          className="d-lg-none" // 👈 hides Offcanvas on desktop
        >
          <Offcanvas.Header closeButton className="bg-dark text-white">
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-dark">
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="text-white" onClick={() => setShowOffcanvas(false)}>Home</Nav.Link>
              <Nav.Link as={Link} to="/live-kirtan" className="text-white" onClick={() => setShowOffcanvas(false)}>Live Kirtan</Nav.Link>
              <Nav.Link as={Link} to="/hukamnama" className="text-white" onClick={() => setShowOffcanvas(false)}>Hukamnama Sahib</Nav.Link>
              <Nav.Link as={Link} to="/katha" className="text-white" onClick={() => setShowOffcanvas(false)}>Katha</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        {/* ✅ Collapse — Only for Desktop */}
        <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
          <Nav>
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/live-kirtan" className="text-white">Live Kirtan</Nav.Link>
            <Nav.Link as={Link} to="/hukamnama" className="text-white">Hukamnama Sahib</Nav.Link>
            <Nav.Link as={Link} to="/katha" className="text-white">Katha</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;