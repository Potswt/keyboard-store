import './KeyPost.css';
function KeyPost(props){
    const {keyboard,onBgClick} = props;
    return (
        <div className='key-post'>
            <div className="key-post-bg" onClick={onBgClick} />
            <div className="key-post-content">
                <img src={keyboard.fullUrl} />
                <h4>{keyboard.title}</h4>
            </div>
        </div>
    )
}

export default KeyPost;