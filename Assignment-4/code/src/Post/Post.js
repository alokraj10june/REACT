import PostFooter  from "./PostFooter";
import  PostHeader from "./PostHeader";
import  PostImage  from "./PostImage";
const Post = ({config}) =>{
    return <div class="PostContainer">
        <PostHeader config={config}/>
        <PostImage config={config}/>
        <PostFooter config={config}/>
    </div>;
};
export default Post;