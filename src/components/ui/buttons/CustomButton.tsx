import Link from 'next/link';
import React from 'react';

type CustomButtonProps = {
    href: string;
    children?: React.ReactNode;
};

const CustomButton: React.FC<CustomButtonProps> = ({ href, children }) => (
    <Link href={href} className={'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'}>
        {children}
    </Link>
);

export default CustomButton;