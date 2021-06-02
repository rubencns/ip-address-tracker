import { useState } from 'react';
import Map from './components/map/map';
import RightArrow from './assets/svg/icon-arrow.svg';
import Details from './components/details/details';
import useGeoLocation from './hooks/useGeoLocation';
import Loader from './components/loader/loader';
import './app-style.scss';

function App() {
  const [query, setQuery] = useState('');
  const [input, setInput] = useState('');
  const { data, loading, error } = useGeoLocation(query);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <div className="app">
      <div className="app-header">
        <div className="app-header-title">
          <h1>IP Address Tracker</h1>
        </div>
        <form className="app-header-search" onSubmit={handleQuerySubmit}>
          <input
            className="app-header-search-input"
            type="text"
            placeholder="Search for any IP address or domain"
            value={input}
            onChange={handleInputChange}
          />
          <button className="app-header-search-button">
            <img src={RightArrow} alt="right arrow" />
          </button>
        </form>
        {error && (
          <div className="app-error">
            <p>{error}</p>
          </div>
        )}

        <Details geoDetails={data} />
      </div>
      <div className="app-map">
        {loading && (
          <div className="app-map-loader">
            <Loader />
            <p>Map loading...</p>
          </div>
        )}
        {!data.location && !loading && <p>No map available.</p>}
        {data.location && !loading && <Map location={data.location} />}
      </div>
    </div>
  );
}

export default App;
