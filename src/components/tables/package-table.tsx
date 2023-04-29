import styles from "~/styles/table.module.scss";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { IPackage, useDeviceStore } from "~/contexts/device";

export default function PackageTable() {
  const {
    device: { packages },
    addPackage,
  } = useDeviceStore();

  const { device } = useDeviceStore()

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>نام تجهیزات</th>
            <th>دریافتی</th>
            <th>برگشتی</th>
            <th>مصرفی</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((p) => (
            <Tr key={p.id} {...p} />
          ))}
        </tbody>
      </table>
      <button onClick={addPackage} className={styles.add}>
        <PlusIcon className="ml-2 h-4 w-4" />
        افزودن تجهیزات
      </button>
      <button className={styles.add} onClick={() => console.log(device)}>show</button>
    </div>
  );
}

function Tr(pg: IPackage) {
  const [consumed, setConsumed] = useState(0);
  const { changePackageHandler, removePackage } = useDeviceStore();
  const handleChange = (event: React.ChangeEvent<HTMLTableRowElement>) => {
    const target = event.target as HTMLTableRowElement;
    const name = target?.querySelector("[data-name=name]")?.innerHTML;
    const receive = parseInt(
      target.querySelector("[data-name=receive]")?.innerHTML ?? "0"
    );
    const returned = parseInt(
      target.querySelector("[data-name=returned]")?.innerHTML ?? "0"
    );
  
    if (receive < 0 || returned < 0 || isNaN(receive) || isNaN(returned)) return;
  
    setConsumed(receive - returned);
    changePackageHandler({ id: pg.id, name, receive, returned });
  };
  

  return (
    <tr
      className={styles["row-package"]}
      onBlur={handleChange}
      onDoubleClick={() => removePackage(pg.id)}
      contentEditable
      suppressContentEditableWarning={true}
    >
      <td data-name="name">{pg.name}</td>
      <td data-name="receive">{pg.receive}</td>
      <td data-name="returned">{pg.returned}</td>
      <td data-name="consumed">{consumed}</td>
    </tr>
  );
}
