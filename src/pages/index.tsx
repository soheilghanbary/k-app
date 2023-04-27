import DepositTable from "~/components/tables/deposit-table";
import DetailTable from "~/components/tables/detail-table";
import PackageTable from "~/components/tables/package-table";

export default function home() {
  return (
    <div>
      <h1 className="mb-8 text-2xl text-foreground-secondary">سریال : 11288</h1>
      <DetailTable />
      <PackageTable />
      <DepositTable />
    </div>
  );
}
