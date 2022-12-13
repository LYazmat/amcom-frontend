import * as React from "react";

import Default from "../templates/Default";
import CollapsibleSaleTable from "../organisms/CollapsibleSaleTable";

const salesPayload = async function () {
  return fetch(`http://127.0.0.1:8000/sale/`).then((data) => data.json());
};

export default function Sale() {
  const [sales, setSales] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      setSales(await salesPayload());
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <Default title="Vendas">
      <CollapsibleSaleTable sales={sales} />
    </Default>
  );
}
