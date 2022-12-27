import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container, Footer, Header, LinkGit } from './Layout.styled';
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
      <Footer>
        Movie 2022 Powered by{' '}
        <LinkGit
          href="https://github.com/Sergeyfilatyev"
          target="_blank"
          rel="noreferrer"
        >
          SergeyFilatyev
        </LinkGit>
      </Footer>
    </>
  );
};
