import Link from "next/link";
import Image from "next/image";
import {
    Show,
    UserButton,
    SignInButton,
} from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={46}
                        height={44}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <Show when="signed-in">
                    <UserButton />
                </Show>

                <Show when="signed-out">
                    <SignInButton />
                </Show>
            </div>
        </nav>
    )
}

export default Navbar