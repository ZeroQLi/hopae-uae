import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
	return (
		<header className='flex max-h bg-slate-400'>
			<h1>hopae - Uae pass</h1>
			<nav>
				<ul>
					<li>
						<Button><Link href="/login">login page</Link></Button>
					</li>
				</ul>
			</nav>
		</header>
	);
}