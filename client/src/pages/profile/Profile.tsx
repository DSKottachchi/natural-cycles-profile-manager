import { Info } from "lucide-react";

export function Profile() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center">
                <div className="border rounded-t px-5 py-10 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex items-center font-bold text-sm mb-2">Manage profile information</div>
                    <div className="flex items-center text-sm text-gray-600 mb-10">Update your email and name to keep your account information current and accurate.</div>


                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm leading-6 text-gray-900">
                                    Name
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#72035d] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#72035d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#72035d]"
                            >
                                Save
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </>
    );
}

export default Profile;