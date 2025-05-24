import { Button } from "@/components/ui/button";
import { SignOut } from "@/components/sign-out";
import { UserInfo } from "@/components/info";

export default function Home() {
  return (
	<div className="flex flex-col p-10 gap-3">
		<h1 className="text-3xl font-bold">A test integration login for UAE PASS</h1>
		<h2 className="text-2xl">Click on the login button to sign in to a existing uae pass account</h2>
		<UserInfo />
		<SignOut />
	</div>
  );
}
