import './App.css';
import AppHeader from './AppHeader';
import AppSearch from './AppSearch';
import keyboards from './Data/keyboards';
import KeyItem from './KeyItem';
import KeyPost from './KeyPost';
import {useState} from 'react';

function App() {
    const [selectedKeyboard,setSelectedKeyboard] = useState(keyboards[null]);
    const [searchText, setSearchText] = useState('');
function onKeyboardOpenClick(theKeyboard){
    setSelectedKeyboard(theKeyboard);
}

function onKeyboardCloseClick() {
    setSelectedKeyboard(null);
}

    const filteredKeyboards = keyboards.filter((keyboard) => {
        return keyboard.title.includes(searchText);
})    
    const keyElements = keyboards.filter((keyboard) => {
        return keyboard.title.includes(searchText);
}).map((keyboard, index) => {
        return <KeyItem key={index} keyboard={keyboard} onKeyboardClick={onKeyboardOpenClick}/>
})
    let keyPost = null;
    if (!!selectedKeyboard) {
        keyPost = <KeyPost keyboard={selectedKeyboard} onBgClick={onKeyboardCloseClick} />
}
    return (
        <div className="app">
            <AppHeader />
            <section className='app-section'>
                <div className='app-container'>
                    <AppSearch value={searchText} onValueChange={setSearchText}/>
                    <div className='app-grid'>
                        {keyElements}
                    </div>
                </div>    
            </section>
            {keyPost}
        </div>
);
}

export default App;
