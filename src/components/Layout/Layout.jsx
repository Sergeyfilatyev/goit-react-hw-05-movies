import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BoxMain, Container, Footer, Header, LinkGit } from './Layout.styled';
export const Layout = () => {
  return (
    <Container>
      <div>
        <Header>
          <Navigation />
        </Header>
        <main>
          <Suspense>
            <BoxMain>
              <Outlet />
            </BoxMain>
          </Suspense>
        </main>
      </div>
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
    </Container>
  );
};
