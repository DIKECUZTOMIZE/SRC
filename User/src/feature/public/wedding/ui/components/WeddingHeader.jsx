import React from "react";
import { Heart } from "lucide-react";


const WeddingHeader = ()=>{


return (

<div className="
mb-8
border-b
pb-4
">


<div className="
inline-flex
items-center
gap-2
bg-pink-100
text-pink-700
px-3
py-1
rounded-full
text-xs
font-bold
mb-3
">

<Heart size={14}/>

Guwahati Wedding Cars

</div>



<h2 className="
text-3xl
font-bold
text-slate-900
">


Wedding

<span className="
text-pink-600
">

 Cars

</span>


</h2>




<p className="
text-slate-500
mt-2
">

Make your special day memorable with luxury wedding vehicles.

</p>



</div>

)

}


export default React.memo(WeddingHeader);