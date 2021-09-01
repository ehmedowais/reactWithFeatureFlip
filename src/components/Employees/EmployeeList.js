import { useFetch } from '../../helpers/FetchData/FetchData';
import Table from 'react-bootstrap/Table';
export default function UserList() {
    const res = useFetch('http://localhost:8080/employee/listAll', {});
    const toggleRes = useFetch('http://localhost:8080/api/ff4j/check/language-french',{});
    debugger;
    console.log("Toggle response is : "+JSON.stringify(toggleRes.response));
    if(JSON.stringify(toggleRes.response) === 'false') {
        return (
            <div>
                <Table>
                    <tbody>
                        <tr>Feature is turned off</tr>
                    </tbody>
                </Table>
            </div>
        )
    }
    

    if(!res.response) {
        return <div>Loading...data</div>
    }
    
    const data = res.response.employees;

    return (
        <div>
        <Table class="striped bordered hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            
          </tr>
        </thead> 
        <tbody>
            {data && data.map(row => {
                return (
                <tr>
                    <th scope="row" key={row.id}>{row.id}</th>
                    <td>{row.firstName}</td>
                    <td>{row.lastName}</td>
                    
                </tr>
             ) })}    
        </tbody> 
      </Table>
      </div>
    )
}