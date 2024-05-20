import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({auth, user}) {

    const {data, setData, post, errors, reset} =useForm({
        name: user.name || '',
        email: user.email || '',
        password: '',
        password_confirmation: '',
        _method: "PUT",
    })

    const onSubmit = (e) => {
        e.preventDefault();

        post(route("user.update", user.id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit User {user.name}
                    </h2>
                </div>
            }
        >

        <Head title="Update User" />

        

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <form 
                        onSubmit={onSubmit}
                        className="p-4 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                    >
                    <div className='mt-4'>
                        <InputLabel htmlFor="user_name" value="User Name"></InputLabel>
                        <TextInput 
                            id="user_name"
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            onChange={e => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} className='mt-2'/>
                    </div>
                    <div className='mt-4'>
                        <InputLabel htmlFor="user_email" value="User Email"></InputLabel>
                        <TextInput 
                            id="user_email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            onChange={e => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className='mt-2'/>
                    </div>
                    <div className='mt-4'>
                        <InputLabel htmlFor="user_password" value="User Password"></InputLabel>
                        <TextInput 
                            id="user_password"
                            name="password"
                            value={data.password}
                            type="password"
                            className="mt-1 block w-full"
                            onChange={e => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className='mt-2'/>
                    </div>
                    <div className='mt-4'>
                        <InputLabel htmlFor="user_password_confirmation" value="Confirmed Password"></InputLabel>
                        <TextInput 
                            id="user_password_confirmation"
                            name="password_confirmation"
                            type="password"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            onChange={e => setData('password_confirmation', e.target.value)}
                        />
                        <InputError message={errors.password_confirmation} className='mt-2'/>
                    </div>
                        <div className="mt-4 text-right">
                        <Link
                            href={route("user.index")}
                            className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-300 mr-2"
                        >
                            Cancel
                        </Link>
                        <button
                            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"    
                        >
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </AuthenticatedLayout>
    )
}