const Dropdown = ({ usersArray }) => { return ( <div> 
    <label className="mt-4">Assign user(s) to as task:</label>
    
     <button className=" px-4 w-full py-2 flex items-center justify-between rounded border border-[#828FA340] hover:border-primary cursor-pointer relative "> <span className="block"> <FiChevronDown color="#635FC7" size={24} /> </span> { <div className="absolute bottom-full translate-x-9 left-full translate-y-full rounded bg-[#20212c] w-max"> <ul className="flex flex-col p-2"> {usersArray.map((user) => ( <li key={user.id} className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `}> <img className="w-6 h-6 " src={user.imgUrl} alt={`${user.name} image`} /> <span>{user.name}</span> </li> ))} </ul> </div> } </button> </div> ); };

const [isDropdownOpen, setIsDropdownOpen] =

const toggleDropdown = () => { setIsDropdownOpen(true); };

const Dropdown = ({ usersArray, setIsDropdownOpen, isDropdownOpen }) => { const toggleDropdown = () => { setIsDropdownOpen(true); }; return ( <div> <label className="mt-4">Assign user(s) to as task:</label> <button className=" px-4 w-full py-2 flex items-center justify-between rounded border border-[#828FA340] hover:border-primary cursor-pointer relative " // Function to show the dropdown on click onClick={toggleDropdown}> <span className="block"> <FiChevronDown color="#635FC7" size={24} /> </span> // Conditionally rendering your dropdown list {isDropdownOpen && ( <div className="absolute bottom-full translate-x-9 left-full translate-y-full rounded bg-[#20212c] w-max"> <ul className="flex flex-col p-2"> {usersArray.map((user) => ( <li key={user.id} className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `}> <img className="w-6 h-6 " src={user.imgUrl} alt={`${user.name} image`} /> <span>{user.name}</span> </li> ))} </ul> </div> )} </button> </div> ); };

Dropdown usersArray={usersArray} isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />

<Dropdown usersArray={usersArray} isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} assignedList={assignedList} setAssignedList={setAssignedList} />

<ul className="flex flex-col p-2"> {usersArray.map((user) => ( <li key={user.id} className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleAssign(user)} > {assignedList.includes(user) && <FiCheck />} <img className="w-6 h-6 " src={user.imgUrl} alt={`${user.name} image`} /> <span>{user.name}</span> </li> ))} </ul>

<ul className="flex flex-col p-2"> {usersArray.map((user) => ( <li key={user.id} className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleAssign(user)} > {assignedList.includes(user) && <FiCheck />} <img className="w-6 h-6 " src={user.imgUrl} alt={`${user.name} image`} /> <span>{user.name}</span> </li> ))} </ul>


<AssignedList assignedList={assignedList} setAssignedList={setAssignedList} />


const [assignedList, setAssignedList] = useState([]);





























