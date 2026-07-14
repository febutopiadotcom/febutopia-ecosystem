import proposals from "@/data/proposals.json";


export default function ProposalBoard(){

return(

<section className="
p-20
">


<h2 className="
text-4xl
font-bold
">

Citizen Proposal Board

</h2>


<div className="
grid
md:grid-cols-3
gap-5
mt-10
">


{
proposals.map((p)=>(


<div
key={p.title}
className="
border
rounded-xl
p-6
"
>


<h3 className="
text-2xl
font-bold
">

{p.title}

</h3>


<p>
Status:
{p.status}
</p>


<p>
Votes:
{p.votes}
</p>


</div>


))

}


</div>


</section>

)

}
