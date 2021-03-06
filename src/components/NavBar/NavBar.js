
// Components
import DropDownMenu from "./DropDown/DropDownMenu";
import NavItem from "./NavItem";

// Styling
import "./NavBar.css"

// React
import {useSelector} from "react-redux";

/**
 * @author Andreas Starheim Hernæs & Mathias van der Bend
 * @version v1.0
 *
 * The navbar component in the header. Makes it possible to find items by category
 */



export default function NavBar() {

    /**
     * State of the navbar - true if open, false if closed
     * @type {boolean|*}
     */
    const navBarState = useSelector((state) => state.navBarReducer.isOpen);

    /**
     * If the navBar state is true - render the dropdown menu
     * @returns {JSX.Element}
     */
    const renderDropDown = () => {
        if (navBarState) {
            return (
                <DropDownMenu/>
            )
        } else {
            return (
                <></>
            )
        }
    }

    return (
        <div className={"navbar_wrapper"}>
            <div className={"navitems_wrapper"}>
                <NavItem name={"Men"}/>
                <NavItem name={"Women"}/>
                {renderDropDown()}
            </div>

        </div>
    )
}