import { LayoutDashboard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { PlusIcon } from 'lucide-react'
import { Input } from "./ui/input";

export default function Sidebar() {
  return (
    <div className="h-[90vh] w-64">
      <ul className="flex flex-col gap-1">
        <Search />
        <Item />
      </ul>
    </div>
  );
}

function Search() {
  return (
    <Input type="search" className="w-48 text-sm" placeholder="جستجو" />
  )
}

function Item() {
  return (
    <Accordion type="single" collapsible className="text-sm w-48" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center">
            <LayoutDashboard className="ml-4 h-4 w-4" />
            فروردین
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <button className="mt-4 hover:text-foreground-secondary active:scale-90 duration-150 flex justify-center items-center px-2 py-1 border bg-background-secondary rounded-lg"><PlusIcon className="w-4 h-4" /></button>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex items-center">
            <LayoutDashboard className="ml-4 h-4 w-4" />
            اردیبهشت
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="flex items-center">
            <LayoutDashboard className="ml-4 h-4 w-4" />
            خرداد
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className="flex items-center">
            <LayoutDashboard className="ml-4 h-4 w-4" />
            تیر
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col">
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
            <li className="p-2 pr-3 hover:text-foreground-secondary hover:pr-5 duration-200 transition-[padding] font-medium hover:bg-background-secondary rounded-lg cursor-pointer">112340</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
