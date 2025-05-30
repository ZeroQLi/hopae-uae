import { Button } from "@/components/ui/button";
import { SignOut } from "@/components/sign-out";
import { UserInfo } from "@/components/info";
import { SignIn } from "@/components/sign-in";
import { auth } from "../auth";

export default async function Home() {
	const session = await auth();
	return (
	<div className="flex flex-col p-10 gap-3">
		<h1 className="text-3xl font-semibold">A test integration login for UAE PASS</h1>
		<h2 className="text-2xl">Click on the login button to sign in to a uae pass account</h2>
		<h2>Refer to the github repository for more information</h2>
		<UserInfo />
	</div>
  );
}
