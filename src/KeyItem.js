import './KeyItem.css';

function KeyItem(props){
    const {keyboard,onKeyboardClick} = props;
    return (
        <div className='key-item'>
            <img src={keyboard.thumbnailUrl} onClick={() => {onKeyboardClick(keyboard)}} />
            <h4>{keyboard.title}</h4>
        </div>
    )
}

export default KeyItem;