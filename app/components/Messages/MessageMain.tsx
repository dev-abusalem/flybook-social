
import LeftSideBarMain from '@/app/global/LetfSidebar/LeftSideBarMain'
import RightsidebarMain from '@/app/global/RightSidebar/RightsidebarMain'
import Container from '@/app/layouts/Container'
import Header from '@/app/layouts/Header'
import React from 'react'
import MessageCard from './MessageCard'
    
    const MessageMain = () => {
      return (
        <>
      <Header />
      <main className="bg-slate-100 dark:bg-slate-900  min-h-screen">
        <Container>
          <div className=" grid grid-cols-4 justify-between items-start gap-x-4">
            <section className="md:col-span-1 hidden md:flex justify-start items-start flex-col gap-y-4 my-3 ">
              <div className="p-4 rounded-lg shadow bg-white dark:bg-slate-950  w-full">
                <LeftSideBarMain />
              </div>
            </section>
            <section className="md:col-span-2 col-span-4 my-3 flex justify-start items-start flex-col gap-y-4 ">
              {/* post from for home page start */}
              <div className="p-4 rounded-lg shadow w-full bg-white dark:bg-slate-950 ">
                <h1 className='text-2xl font-semibold text-center'>Messages</h1>
              </div>
              {/* post from for home page end */}
              {/* home page posts start */}
              <div className="w-full">
                

                <MessageCard
                  texts="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Blanditiis ab et culpa voluptatibus #nachole ducimus quam at, molestiae
                  aspernatur quis consequatur placeat libero iusto   quod
                  veritatis eligendi saepe, totam omnis. Rerum? #dhaka"
                />
                 
              </div>
              {/* home page posts end */}
            </section>
            <section className="md:col-span-1 hidden md:block my-3 ">
              <RightsidebarMain />
            </section>
          </div>
        </Container>
      </main>
    </>

      )
    }
    
    export default MessageMain