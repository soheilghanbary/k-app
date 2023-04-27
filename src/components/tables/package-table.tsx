import styles from "~/styles/table.module.scss";
import { PlusIcon } from "lucide-react";
import { create } from "zustand";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

interface PackageProps {
  id: string;
  name: string | undefined;
  receive: string | number;
  consumed: string | number;
  returned: string | number;
}

interface usePackageStoreProps {
  packages: PackageProps[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  changeHandler: (p: PackageProps) => void;
}

const usePackageStore = create<usePackageStoreProps>((set, get) => ({
  packages: [],
  onAdd: () =>
    set((state) => ({
      packages: [
        ...state.packages,
        {
          id: uuidv4(),
          name: "",
          receive: "",
          consumed: "",
          returned: "",
        },
      ],
    })),
  onRemove: (id: string) => {
    const list = get().packages.filter((p) => p.id !== id);
    return set({ packages: list });
  },
  changeHandler: (p) => {
    const index = get().packages.findIndex((item) => item.id === p.id);
    if (index > -1) {
      get().packages[index] = p;
      set({ packages: [...get().packages] });
    }
  },
}));

export default function PackageTable() {
  const { packages, onAdd } = usePackageStore();

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead onClick={() => console.log(packages)}>
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
      <button onClick={onAdd} className={styles.add}>
        <PlusIcon className="ml-2 h-4 w-4" />
        افزودن تجهیزات
      </button>
    </div>
  );
}

function Tr(pg: PackageProps) {
  const { changeHandler, onRemove } = usePackageStore();
  const handleChange = (event: React.ChangeEvent<HTMLTableRowElement>) => {
    const target = event.target as HTMLTableRowElement;
    const name = target?.querySelector("[data-name=name]")?.innerHTML;
    const receive = parseInt(
      target.querySelector("[data-name=receive]")?.innerHTML ?? "0"
    );
    const returned = parseInt(
      target.querySelector("[data-name=returned]")?.innerHTML ?? "0"
    );
    const consumed = parseInt(
      target.querySelector("[data-name=consumed]")?.innerHTML ?? "0"
    );

    changeHandler({ id: pg.id, name, receive, returned, consumed });
  };

  return (
    <tr
      className={styles["row-package"]}
      onBlur={handleChange}
      onDoubleClick={() => onRemove(pg.id)}
      contentEditable
    >
      <td data-name="name">{pg.name}</td>
      <td data-name="receive">{pg.receive}</td>
      <td data-name="returned">{pg.returned}</td>
      <td data-name="consumed">{pg.consumed}</td>
    </tr>
  );
}
