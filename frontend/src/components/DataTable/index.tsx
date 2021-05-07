import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/SalePage";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/request";

const DataTable = () => {

    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0
    })

    useEffect( () => {
        axios.get(`${BASE_URL}/sales?page=0&size=2 0&sort=date,desc`)
            .then( (response) => {
                setPage(response.data)
            })
    }, []);

    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Seler</th>
                        <th>Visited Customers</th>
                        <th>Won Deals</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {page.content?.map(item => (
                        <tr key={item.id}>
                            <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                            <td>{item.seller.name}</td>
                            <td>{item.visited}</td>
                            <td>{item.deals}</td>
                            <td>{item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;