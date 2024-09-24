import { FaXmark } from "react-icons/fa6";

const Header = () => {
  return <label className="mt-4">UI/UX Designs</label>;
};


const Close = () => {
    const {setIsDropdownOpen} = useContext(UserAssignContext)

    return (
        <div className="absolute top-0 right-0 flex items-center justify-center -translate-y-full gap-2 bg-[#c0392b] px-2 py-1 rounded-t">
            <span
            onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(false)
            }}
            >
                <FaXmark size={20} />
            </span>
        </div>
    )
}