import React from 'react';
import { navigate, type HeadFC, type PageProps } from 'gatsby';
import Sky from '../components/Sky';
import Menu from '../components/Menu';

const IndexPage: React.FC<
  PageProps<object, object, { onloadAnimation?: string }, object>
> = ({ location }) => {
  function routeToOtherPage(path: string) {
    const sky = document.getElementById('sky-container');
    sky?.classList.add('slide-out-up');
    setTimeout(() => {
      navigate(path, { state: { onloadAnimation: 'slide-in-up' } });
    }, 500);
  }

  return (
    <>
      <Menu onRoute={routeToOtherPage} />
      <div style={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
        <Sky
          onClickNode={console.log}
          onloadAnimation={location.state.onloadAnimation}
        />
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sangkkim's portfolio</title>;
