import { useState, useEffect } from "react";
import { Container, Postcard } from "../index";
import appwriteService from "../../appwrite/config";

function Allposts() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setposts(posts.documents);
      }
    }, []);
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            {
              <Postcard key={post.$id} post={post} className="p-2 w-1/4" />;
            }
          })}
        </div>
        ;
      </Container>
    </div>
  );
}

export default Allposts;
