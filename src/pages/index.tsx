import DepositTable from "~/components/tables/deposit-table";
import DetailTable from "~/components/tables/detail-table";
import PackageTable from "~/components/tables/package-table";

export default function home() {
  return (
    <div>
      <DetailTable />
      <PackageTable />
      <DepositTable />
    </div>
  );
}
