export const PostImage = ({ config }) => {
    const relativeImageURL = `../assests/${config.PostImage}`;
    return <div className="PostImageWrapper">
        <img src={relativeImageURL} alt="imag" />
    </div>;
};
export default  PostImage;