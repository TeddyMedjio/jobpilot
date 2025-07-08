import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Language() {
  return (
    <Select>
      <SelectTrigger
        className={cn("w-auto border-0 shadow-none focus-visible:ring-0")}
      >
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">
          <Image src="/anglais.jpg" width={24} height={16} alt="french flag" />
          English
        </SelectItem>
        <SelectItem value="french">
          <Image src="/francais.jpg" width={24} height={16} alt="french flag" />
          French
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
