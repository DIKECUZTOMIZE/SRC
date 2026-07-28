import React from "react";
import { Search } from "lucide-react";


const TempoFilter = ({
search,
setSearch
})=>{


return (

<div className="
bg-white
border
rounded-2xl
p-4
">


<div className="relative">


<Search
className="
absolute
left-3
top-3
text-slate-400
"
size={18}
/>


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search Traveller / Bus"

className="
w-full
pl-10
py-3
rounded-xl
bg-slate-50
border
outline-none
focus:border-emerald-500
"

/>


</div>


</div>

)


}


export default React.memo(TempoFilter);