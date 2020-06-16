import React from 'react';

import { Cards, Chart, CountryPicker } from './Components';

class App extends React.Component {
    render() {
        return (
            <div>
                <Cards />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}

export default App;