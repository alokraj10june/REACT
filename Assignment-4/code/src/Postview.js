import React ,{ useState, useEffect } from 'react';
import Post from "./Post";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RadarIcon from '@mui/icons-material/Radar';
const Postview=()=> {
  const [posts, setPosts] = useState([]);
  const setPostsAsync = async() => {
    const response = await fetch("http://localhost:3004/user"),
    data = await response.json();
    setPosts(data);
  }
  useEffect(() => {
    setPostsAsync();
  }, []);
  return (
    <div>
    <div className='header-container'>
        <div className='left-side' ><span><RadarIcon/></span>Instaclone</div>
        <div className='right-side'><PhotoCameraIcon/></div>
      </div>

    <div className="Postview">
      {posts.map((post, index) => (
      <Post key={index} config={post}/>
      ))}
    </div>
    </div>
  );
}
export default Postview;