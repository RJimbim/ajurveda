import { useState } from "react"

export default function NavDropdownItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        {/* {item.icon && <i className={item.icon}></i> } */}
                        <p className="sidebar-item-title">{item.title}</p> 
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <NavDropdownItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {/* { item.icon && <i className={item.icon}></i> } */}
                {item.title}
            </a>
        )
    }
}