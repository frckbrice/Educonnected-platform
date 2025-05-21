import { usePathname } from 'next/navigation';
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import NavItem from '../nav-item';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useTheme } from 'next-themes';

type Props = {
    activeItem: number;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Mobilesheet({
    activeItem,
    open,
    setOpen,
}: Props) {
    const location = usePathname();
    const { theme } = useTheme();


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                    <Menu className='h-4 w-4' />
                </Button>
            </SheetTrigger>
            <SheetContent className='m-0 w-[300px]'>
                <SheetHeader className='m-0'>
                    <SheetTitle>Menu</SheetTitle>
                    {/* <SheetDescription>
                        Select an Option
                    </SheetDescription> */}
                </SheetHeader>
                <div className=' grid gap-4 py-4'>
                    <NavItem
                        activeItem={activeItem}
                        isMobile={true}
                    />
                </div>
                <HiOutlineUserCircle
                    size={25}
                    className={`cursor-pointer  my-2 ml-6 dark:text-white not-dark:text-black`}
                    onClick={() => setOpen(!open)}
                />
            </SheetContent>
        </Sheet>
    )
}

export default Mobilesheet;
