import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../features/userApiSlice';
import { logout } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const [logoutApiCall] = useLogoutMutation()
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function logoutHandler(){
    try{
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate("/")
    }catch(error){
      console.log(err)
    }
  }
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href='/'>MERN App</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>
                        Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link href='/login'>
                      <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register" >
                    <Nav.Link href='/register'>
                      <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                  </LinkContainer>


                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;