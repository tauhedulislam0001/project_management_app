import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from '@/constant';
import { Head } from '@inertiajs/react';

export default function Dashboard({ active_tasks, auth, my_pending_task, total_pending_task, total_in_progress_task, my_in_progress_task, my_completed_task, total_completed_task }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-amber-600 text-xl font-semibold">Pending Tasks</h3>
                            <p className='text-xl mt-4'><span className='mr-2'>{my_pending_task}</span>/ <span className='ml-2'>{total_pending_task}</span></p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-blue-600 text-xl font-semibold">In Progress Tasks</h3>
                            <p className='text-xl mt-4'><span className='mr-2'>{my_in_progress_task}</span>/ <span className='ml-2'>{total_in_progress_task}</span></p>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-green-600 text-xl font-semibold">Completed Tasks</h3>
                            <p className='text-xl mt-4'><span className='mr-2'>{my_completed_task}</span>/ <span className='ml-2'>{ total_completed_task }</span></p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-gray-600 text-xl font-semibold">My Active Task</h3>

                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                    <tr>
                                        <th className='px-3 py-3'>ID</th>
                                        <th className='px-3 py-3'>Project Name</th>
                                        <th className='px-3 py-3'>Task Name</th>
                                        <th className='px-3 py-3'>Due Date</th>
                                        <th className='px-3 py-3'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {active_tasks.data.map(task => (
                                        <tr key={task.id}>
                                            <td className='px-3 py-2'>{task.id}</td>
                                            <td className='px-3 py-2'>{task.project.name}</td>
                                            <td className='px-3 py-2'>{task.name}</td>
                                            <td className='px-3 py-2'>{task.due_date}</td>
                                            <td className='px-3 py-2'>
                                                <span className={
                                                    "px-2 py-1 rounded text-white " + TASK_STATUS_CLASS_MAP[task.status]
                                                }>
                                                {TASK_STATUS_TEXT_MAP[task.status]}
                                                </span>    
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
