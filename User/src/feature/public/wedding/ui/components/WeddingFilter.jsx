import React from "react";


const WeddingFilter = ()=>{


return (

<div className="
bg-white
rounded-2xl
shadow-sm
border
p-5
mb-8
">


<h3 className="
text-lg
font-bold
mb-4
">

Search Wedding Car

</h3>



<div className="
grid
grid-cols-1
md:grid-cols-4
gap-4
">


<select className="
border
rounded-xl
p-3
">

<option>
All Cars
</option>

<option>
Luxury
</option>

<option>
Premium
</option>


</select>




<select className="
border
rounded-xl
p-3
">

<option>
All Capacity
</option>

<option>
4 Seater
</option>

<option>
7 Seater
</option>


</select>





<select className="
border
rounded-xl
p-3
">

<option>
Decoration
</option>

<option>
Yes
</option>

<option>
No
</option>


</select>




<button className="
bg-pink-600
text-white
rounded-xl
font-semibold
">

Search

</button>



</div>


</div>

)

}


export default React.memo(WeddingFilter);