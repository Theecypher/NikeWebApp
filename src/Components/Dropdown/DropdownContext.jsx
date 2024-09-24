import { createContext, useRef, useState } from "react";

const userAssignContext = createContext();

const UserAssignDropdown = ({
    children,
    assignedList,
    setAssignList, users,
}) => {
    const userAssignDropdownRef = useRef(null);
    const [isDropdown, setIsDropdown] = useState(false)

    return (
        <userAssignContext.Provider
        value={{
            assignedList,
            users,
            userAssignDropdownRef,
            isDropdown,
            setIsDropdown,
            setAssignList
        }}>
            <div ref={userAssignDropdownRef}>{children}</div>
        </userAssignContext.Provider>
    )
}