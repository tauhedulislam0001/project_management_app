import {ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/16/solid';

export default function TableHeading({
    name,
    sortable= true,
    sort_fields=null,
    sort_direction=null,
    children,
    sortChanged = () => {},
}) {
    return (
        <th onClick={(e) => sortChanged(name)}>
            <div className='px-3 py-3 flex items-center justify-between gap-1 cursor-pointer'>
                {children} 
                {sortable && (
                    <div>
                        <ChevronUpIcon className={
                            'w-4 ' + 
                            (sort_fields === name && sort_direction === "asc" ? "text-lime-600" : "") 
                        }/> 
                        <ChevronDownIcon className={
                            'w-4 -mt-2 ' + 
                            (sort_fields === name && sort_direction === "desc" ? "text-lime-600" : "") 
                        }
                        />
                    </div> 
                )}
            </div> 
        </th>
    );
}
