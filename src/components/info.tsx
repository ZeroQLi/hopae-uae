import { auth } from "../auth";
import  { Avatar, AvatarImage } from "./ui/avatar";

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
				<AvatarImage src={session?.profile?.image} />
			</Avatar>
			<div className="flex flex-col">
				<p className="text-2xl font-bold">{session?.profile?.fullnameEN}</p>
				<p className="text-2xl font-bold">{session?.profile?.fullnameAR}</p>
				<p className="text-xl text-gray-800">Email: {session?.profile?.email}</p>
				<p className="text-xl text-gray-800">Gender: {session?.profile?.gender}</p>
				
			</div>
		</div>
	)
}