import Link from 'next/link';
import { Button } from './ui/button';
import { SignIn } from './sign-in';
import { SignOut } from './sign-out';
import { auth } from '../auth';

export default async function Header() {
	const session = await auth();
	return (
		<header className='flex h-15 w-full shrink-0 items-center px-4 md:px-6 bg-slate-400'>
			<Link href="/"><h1 className='text-2xl font-semibold'>Hopae - uae pass</h1></Link>
			<div className='ml-auto flex gap-2'>
				{session ? <SignOut /> : <SignIn />}
			</div>
		</header>
	);
}