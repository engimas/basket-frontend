
interface DairyProduct {
    name: string;
    img: string;
    detail: string;
    category: string;
    keywords: string[];
    nutrition: {
      calories: number;
      fat: string;
      protein: string;
      carbs: string;
    };
    type: string;
    amount: string;
  }

function TableUI(props: { dairy: DairyProduct[] , handleDelete: (index: number) => void}) {
    return (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.dairy.map((item, index) => (
                <tr key={index}>
                    <td>{index+1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.img} alt={item.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">{item.category}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.detail}</td>
                  <th>
                    <button onClick={()=>props.handleDelete(index)} className="bg-red-500 hover:bg-red-600 btn text-white">Delete</button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Details</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      );
}

export default TableUI