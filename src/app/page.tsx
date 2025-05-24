import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
	  <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
		  <Button><Link href="/login">login page</Link></Button>
    </div>
  );
}
