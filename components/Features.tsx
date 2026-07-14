const features=[

{
title:"⚖️ Equality",
text:"Every citizen has equal rights and opportunities."
},

{
title:"🤝 Cooperation",
text:"Progress through collaboration and unity."
},

{
title:"🏛 Justice",
text:"Transparent and fair governance."
},

{
title:"🚀 Innovation",
text:"Technology improves human life."
}

]


export default function Features(){

return(

<section className="
p-20
grid
md:grid-cols-4
gap-6
">


{
features.map((item)=>(

<div
key={item.title}
className="
bg-slate-900
text-white
p-6
rounded-xl
"
>

<h2 className="text-2xl">

{item.title}

</h2>


<p className="mt-3">

{item.text}

</p>


</div>

))

}


</section>

)

}
