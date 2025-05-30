import { auth } from "../auth"
import  { Avatar, AvatarImage } from "./ui/avatar"

export async function UserInfo() {
	const session = await auth();

	if (!session?.user) return (
	<div>
			<div className="flex flex-col align-left gap-2 p-5 bg-slate-200 rounded-sm">
				<p>Not logged in</p>
			</div>
	</div>)
	return (
		<div className="flex align-left gap-5 p-5 bg-slate-200 rounded-sm">
			<Avatar className="w-15 h-15">
				<AvatarImage src={session?.user?.image} />
			</Avatar>
			<div className="flex flex-col">
				<p className="text-2xl font-bold">{session?.user?.name}</p>
				<p className="text-xl text-gray-500">{session?.user?.email}</p>
			</div>
		</div>
	)
}