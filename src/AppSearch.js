import './AppSearch.css';

function AppSearch(props) {
    const { value, onValueChange } = props;
    return (
        <div className='app-search'>
            <input 
                className='app-search-input'
                type='text'
                placeholder='Search...'
                value={value}
                onChange={(e) => {onValueChange(e.target.value)}}
            />
        </div>
  );
}

export default AppSearch;