import { PlusIcon } from "lucide-react";
import styles from "~/styles/table.module.scss";

export default function DepositTable() {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>واریزی</th>
            <th>تاریخ</th>
            <th>به حساب</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12.500.000 تومان</td>
            <td>02/15</td>
            <td>مهدی علیشاهی</td>
          </tr>
          <tr>
            <td>8.500.000 تومان</td>
            <td>02/18</td>
            <td>مهدی علیشاهی</td>
          </tr>
        </tbody>
      </table>
      <button className={styles.add}>
        <PlusIcon className="ml-2 h-4 w-4" />
        واریزی جدید
      </button>
    </>
  );
}
