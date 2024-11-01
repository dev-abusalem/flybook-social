"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftSideBarMain from "@/app/global/LetfSidebar/LeftSideBarMain";
import RightsidebarMain from "@/app/global/RightSidebar/RightsidebarMain";
import Container from "@/app/layouts/Container";
import Header from "@/app/layouts/Header";
import HomePageTopPostForm from "./HomePageTopPostForm";
import HomePostCard from "./PostCard/HomePostCard";
import HomePostOnlyText from "./PostCard/HomePostOnlyText";
import PostLoadingSecleton from "@/app/global/LoadingStates/PostLoadingSecleton";
import { Post } from "@/app/types/post.type";


const HomePageMain: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function fetchAllPosts() {
    try {
      const response = await axios.get(`/api/post/allposts`);
      if (response.data) {
        setPosts(response.data.reverse());
       }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
   return (
       
       <>
        <Header />
        <main className="bg-slate-100 dark:bg-slate-900 min-h-screen">
          <Container>
            <div className="grid grid-cols-4 justify-between items-start gap-x-4">
              <section className="md:col-span-1 hidden md:flex justify-start items-start flex-col gap-y-4 my-3">
                <div className="p-4 rounded-lg shadow bg-white dark:bg-slate-950 w-full">
                  <LeftSideBarMain />
                </div>
              </section>
              <section className="md:col-span-2 col-span-4 my-3 flex justify-start items-start flex-col gap-y-4">
                {/* Post form for home page start */}
                <div className="p-4 rounded-lg shadow w-full bg-white dark:bg-slate-950">
                  <HomePageTopPostForm />
                </div>
                {/* Post form for home page end */}
                {/* Home page posts start */}
                <div className="w-full">
                  {!posts || posts.length < 1 ?
                    <>
                    <PostLoadingSecleton />
                    <PostLoadingSecleton />
                    <PostLoadingSecleton />
                    </>
                  : posts.map((post) => (
                    <HomePostOnlyText
                      key={post.id}  
                      post={post}
                    />
                  ))}
                 
                </div>
                {/* Home page posts end */}
              </section>
              <section className="md:col-span-1 hidden md:block my-3">
                <RightsidebarMain />
              </section>
            </div>
          </Container>
        </main>
       </>
      );
};

export default HomePageMain;
