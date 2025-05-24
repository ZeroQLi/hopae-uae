import Link from 'next/link';
import { Button } from './ui/button';
import { SignIn } from './sign-in';

export default function Header() {
	return (
		<header className='flex h-15 w-full shrink-0 items-center px-4 md:px-6 bg-slate-400'>
			<h1 className='text-1xl text-bold'><Link href="/">hopae - uae pass</Link></h1>
			<div className='ml-auto flex gap-2'>
				<SignIn />
				<Button variant='outline'><Link href="/login">sign up</Link></Button>
			</div>
		</header>
	);
}