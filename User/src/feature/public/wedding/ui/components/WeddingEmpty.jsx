import React from "react";
import { Heart } from "lucide-react";


const WeddingEmpty = ()=>{


return (

<div className="
bg-white
border
rounded-2xl
py-12
text-center
mt-8
">


<Heart

size={40}

className="
mx-auto
text-pink-600
mb-4
"

/>




<h3 className="
text-lg
font-semibold
">

No Wedding Cars Available

</h3>




<p className="
text-slate-500
mt-2
">

Wedding vehicles are currently unavailable.

</p>



</div>

)

}


export default React.memo(WeddingEmpty);