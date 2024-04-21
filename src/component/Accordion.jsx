import { useState } from "react"
import {ChevronDownIcon} from '@heroicons/react/24/outline'
const data = [
    {
        id:1,
        title:"Accordion one",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi fuga iusto excepturi harum ipsa quae provident culpa sunt, explicabo possimus porro labore, minima architecto accusamus omnis nulla. Quo, dolorem!"
    },
    {
        id:2,
        title:"Accordion Two",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi fuga iusto excepturi harum ipsa quae provident culpa sunt, explicabo possimus porro labore, minima architecto accusamus omnis nulla. Quo, dolorem!"
    },
    {
        id:1,
        title:"Accordion Three",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi fuga iusto excepturi harum ipsa quae provident culpa sunt, explicabo possimus porro labore, minima architecto accusamus omnis nulla. Quo, dolorem!"
    },
]

function Accordion() {
    const [open, setOpen] = useState(null);
return (
    <div className="accordion">
        {
            data.map((item)=> (
                <AccordionItem key={item.id} item={item} setOpen={setOpen} open={open}/>
            ))
        }
    </div>
)
}

export default Accordion


function AccordionItem({item , setOpen, open}){
    const isOpen = item.id === open;
    return (
        
        <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
            <div className="accordion-item__header" onClick={()=> setOpen(item.id)}>
                <div>{item.title}</div>
                <ChevronDownIcon className="accordion-item__chevron"
                // style={{
                //     width: "1.2 rem",
                //     transition: "all 0.2s ease-out",
                //     rotate: isOpen ? "180deg" : "0deg",
                
                    // }}
                    />
                </div>
            <div className="accordion-item__content">{item.text}</div>
        </div>
    )
}