import { Menu, X } from "lucide-react";
import { useState } from "react";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="cursor-pointer"
             onClick={toggleHamburger}>
            { !isOpen ? (
                <Menu/>
            ) : (
                <X/>
            )

            }
            
        </div>
    );
};

export default Hamburger