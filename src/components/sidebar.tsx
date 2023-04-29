import { LayoutDashboard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { PlusIcon } from "lucide-react";
import { Input } from "./ui/input";
import styles from "~/styles/sidebar.module.scss";
import { useState } from "react";
import { api } from "~/utils/api";
import { useRouter } from "next/router";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.body}>
        <Search />
        <Item />
      </ul>
    </div>
  );
}

function Search() {
  return <Input type="search" className="w-48 text-sm" placeholder="جستجو" />;
}

function Item() {
  const { data, isLoading } = api.device.all.useQuery();
  const utils = api.useContext();
  const [newDevice, setNewDevice] = useState({ show: false, serial: "" });
  const router = useRouter();
  const { mutateAsync } = api.device.create.useMutation({
    onSuccess(data) {
      setNewDevice({ show: false, serial: "" });
      console.log(data);
      utils.device.all.invalidate();
    },
  });

  if (isLoading) return <p>loading...</p>;

  async function onCreateDevice() {
    await mutateAsync({ serial: newDevice.serial });
  }

  return (
    <Accordion
      type="single"
      collapsible
      className="w-48 text-sm"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center">
            <LayoutDashboard className="ml-4 h-4 w-4" />
            فروردین
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            {data?.map((device, key) => (
              <li
                key={key}
                className={styles.item}
                onClick={() => router.push(`/${device.serial}`)}
              >
                {device.serial}
              </li>
            ))}
            {newDevice.show ? (
              <input
                autoFocus
                type="text"
                placeholder="S/N"
                className="rounded-lg border bg-transparent p-2 font-medium"
                value={newDevice.serial}
                onChange={(e) =>
                  setNewDevice({ ...newDevice, serial: e.target.value })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onCreateDevice();
                  }
                }}
              />
            ) : (
              <button
                onClick={() => setNewDevice({ ...newDevice, show: true })}
                className="mt-4 flex items-center justify-center rounded-lg border bg-background-secondary px-2 py-1 duration-150 hover:text-foreground-secondary active:scale-90"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            )}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
