
const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:: px-16 lg:px-24'>
            <div className='container py-2 flex justify-center md:justify-between item-center'>
                <div className='text-2xl font-bold hidden md:inline'>Ahmed</div>
                <div className='space-x-6'>
                    <a href='#home ' className='hover:text-gray-400'>Home</a>
                    <a href='#about' className='hover:text-gray-400'>About Me</a>
                    <a href='#services' className='hover:text-gray-400'>Services</a>
                    <a href='#projects' className='hover:text-gray-400'>Projects</a>
                    <a href='#contacts' className='hover:text-gray-400'>Contact</a>
                </div>
                <button className='bg-gradient-to-r from-gray-700 to-green-500 text-white hidden md:inline 
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
            </div>
        </nav>
    )
}

export default Navbar