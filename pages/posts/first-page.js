import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
        <h1> First Post to test</h1>
        <h2>
            <Link href="/">Back to home page (testing)</Link>
        </h2>
        </>
    );
}