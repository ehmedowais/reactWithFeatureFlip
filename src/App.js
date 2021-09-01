import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EmployeeList from './components/Employees/EmployeeList';

export default function App() {  

    return (
        <BrowserRouter>
            
            <Switch>
                <Route exact path='/' component={EmployeeList} />
            </Switch>
            {/* <Sidebar /> */}
        </BrowserRouter>            
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
