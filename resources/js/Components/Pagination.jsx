import { Link } from "@inertiajs/react";

export default function Pagination({links}) {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                preserveScroll
                href={link.url || ""}
                key={link.label}
                className={
                    "inline-block py-2 px-2 rounded-lg text-gray-800 text-xs " + 
                    (link.active ? "bg-gray-200 " : "") + 
                    (!link.url ? "text-gray-800 cursor-not-allowed " : "hover:bg-gray-200")
                }
                dangerouslySetInnerHTML={{__html: link.label}}></Link>
            ))}
        </nav>
    )
}