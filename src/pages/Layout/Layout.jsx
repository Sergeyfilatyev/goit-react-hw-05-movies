import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container, Footer, Header } from './Layout.styled';
export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};
