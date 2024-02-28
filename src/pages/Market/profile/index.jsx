import React from 'react'
import UserInfo from './components/UserInfo';
import TabInfo from './components/TabInfo';
import Container from '@/components/Container';

const index = () => {
  return (
    <section className="py-10 pt-20">
      <Container >
        <div className="lg:flex  justify-between lg:space-x-5">
          <div className="lg:w-5/12 w-full">
            <UserInfo />
          </div>
          <div className="lg:w-7/12 w-full">
            <TabInfo />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default index