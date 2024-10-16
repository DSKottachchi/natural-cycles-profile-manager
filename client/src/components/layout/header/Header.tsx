const Header = () => {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">

                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img src="/logo.png" className="h-5" alt="Company Logo" />
                            </div>

                        </div>

                        <button className="bg-[#72035d] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Logout
                        </button>
                    </div>
                </div>


            </div>

            <header className="bg-[#72035d]">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-xl font-bold text-white">Profile Management</h1>
                </div>
            </header>
        </>
    );
};

export default Header;
