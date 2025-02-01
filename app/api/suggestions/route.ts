export async function GET(request:Request) {
    const {searchParams}=new URL(request.url);
    const term=searchParams.get("term")
    // const term2use=encodeURIComponent(term);

const res= await fetch(`${process.env.BASE_URL}=${term}`,{
    method:"GET",
  
    next:{
        revalidate:24*60*60*6
    }
});

const message= await res.text();
return Response.json({message})


}

