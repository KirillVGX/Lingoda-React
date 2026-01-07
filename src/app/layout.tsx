import Header from '@/sections/header/Header';
import '@/styles/fonts.css';
import '@/styles/globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Lingoda</title>
            </head>

            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
