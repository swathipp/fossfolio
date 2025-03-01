import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@app/ui/components/button';
import { useAuth } from '@app/hooks';
import { AuthModal } from '../AuthModal';
import { UserNav } from './UserNav';

export const MainNav = () => {
    const router = useRouter();
    const { user, toggleModal } = useAuth();
    return (
        <div className="flex justify-between items-center p-4 w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between w-[300px]">
                    <h2 className="text-2xl font-mono">
                        <Link href="/">fossfolio</Link>
                    </h2>
                    <AuthModal />
                    <div className="md:flex gap-4 hidden">
                        <Link href="/">
                            <h4 className="text-md text-[#667085]" onClick={() => router.push('/')}>
                                Home
                            </h4>
                        </Link>
                        <Link href="/events">
                            <h4 className="text-md text-[#667085]">Events</h4>
                        </Link>
                    </div>
                </div>
                {user ? (
                    <UserNav />
                ) : (
                    <Button
                        variant="ghost"
                        className="px-8 text-md text-[white] hover:text-[#7F56D9] hover:bg-[#F9F5FF] bg-[#7F56D9] border-[1.4px] hover:border-[#7F56D9] border-transparent"
                        onClick={toggleModal.on}
                    >
                        Login
                    </Button>
                )}
            </div>
        </div>
    );
};
