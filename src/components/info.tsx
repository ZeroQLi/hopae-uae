import { auth } from "../auth"
import  { Avatar, AvatarImage } from "./ui/avatar"

export async function UserInfo() {
	const session = await auth();

	console.log(session?.user?.name);
	if (!session?.user) return (
	<div>
			<div className="flex flex-col align-left gap-2 p-5 bg-slate-100 rounded-sm">
				<p>Not logged in</p>
			</div>
	</div>)
	return (
		<div className="flex flex-col align-left gap-2 p-5 bg-slate-100 rounded-sm">
			<Avatar className="w-15 h-15">
				<AvatarImage src={session?.user?.image} />
			</Avatar>
			<h1 className="text-xl">Name: {session.user.name}</h1>
			<h1 className="text-xl">Email: {session.user.email}</h1>
		</div>
	)
}