import items from "./NavDropdownList.json"
import NavDropdownItem from "./NavDropdownItem"
import "./NavDropdownStyle.css"


export default function NavDropdown(){
    return (
      <div className="sidebar-container">
        <div className="sidebar">
          { items.map((item, index) => <NavDropdownItem key={index} item={item} />) }
        </div>
        </div>
    )
}