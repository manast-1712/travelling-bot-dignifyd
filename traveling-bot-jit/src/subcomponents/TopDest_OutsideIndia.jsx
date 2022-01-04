const TopDest_OutsideIndia=()=>{
let arr=[{tittle:"Sydney",link:"https://th.bing.com/th/id/R.2d4a8770379911618b9d36f2e9d3c12a?rik=x1fVLeo7aJW04w&riu=http%3a%2f%2f3.bp.blogspot.com%2f-N85uglfG738%2fUIaPglGDqvI%2fAAAAAAAAU1c%2f0b_rZmbxaLE%2fs1600%2fSydney-Opera-House-3D-Scan.jpg&ehk=cBS65gWaiYnvAnOKKCjulyhWGhuNxsZYBZNEEhNGTLk%3d&risl=&pid=ImgRaw&r=0"},
{tittle:"Surfers Paradise",link:"https://hotels.finder.com.au/rimg/dimg/22/60/8249c266-city-49186-17a3a614615.jpg?crop=true&width=270&height=120&xhint=2546&yhint=1167"},
{tittle:"Melbourne",link:"https://hotels.finder.com.au/rimg/dimg/2e/4d/e27e04f5-city-13998-166a6398190.jpg?crop=true&width=270&height=120&xhint=2337&yhint=1783"},
{tittle:"Brisbane",link:"https://hotels.finder.com.au/rimg/dimg/97/d4/1dc3de6e-city-27249-163f5014ee8.jpg?crop=true&width=270&height=120&xhint=1429&yhint=1036"},
{tittle:"Canberra",link:"https://hotels.finder.com.au/rimg/dimg/56/9d/9b34ca4c-city-1417-1643db6d9ad.jpg?crop=true&width=270&height=120&xhint=1518&yhint=1115"},
{tittle:"Newcastle",link:"https://hotels.finder.com.au/rimg/dimg/a4/5b/cbec103d-city-3094-164a3f467e5.jpg?crop=true&width=270&height=120&xhint=2692&yhint=1645"},
{tittle:"Pokolbin",link:"https://hotels.finder.com.au/rimg/dimg/6b/01/70c0170e-city-47303-164a40df180.jpg?crop=true&width=270&height=120&xhint=3035&yhint=2228"},
{tittle:"Caims",link:"https://hotels.finder.com.au/rimg/dimg/fe/77/634da909-city-23637-16775fe0075.jpg?crop=true&width=270&height=120&xhint=1371&yhint=1431"},
{tittle:"Nelson Bay",link:"https://hotels.finder.com.au/rimg/dimg/e6/70/c0920de3-city-42551-170426506e5.jpg?crop=true&width=270&height=120&xhint=3231&yhint=1922"},
{tittle:"Wollongong",link:"https://hotels.finder.com.au/rimg/dimg/43/75/565e2b19-city-14685-16dae4e00e4.jpg?crop=true&width=270&height=120&xhint=2316&yhint=1230"},
{tittle:"Hobart",link:"https://hotels.finder.com.au/rimg/dimg/67/bc/8a4a0d62-city-12823-1643dafb1a1.jpg?crop=true&width=270&height=120&xhint=1859&yhint=1231"},
{tittle:"Adelaide",link:"https://hotels.finder.com.au/rimg/dimg/a1/1d/24141f25-city-34534-162bb523b08.jpg?crop=true&width=270&height=120&xhint=3004&yhint=1611"}]
    return<>
        <div className="w-full h-auto flex flex-col my-16">
            <div className="mx-auto text-3xl font-semibold mb-10"><span className="text-skyBlue mr-2">Popular</span><span className="text-darkBlue">destinations outside India</span></div>
            <div className="w-full h-auto grid grid-cols-12 gap-2">
                {
                    arr.map((v,i)=>{
                        return<div className="col-span-3 1450px:col-span-4 1400px:h-44 1450px:h-48 h-52 flex flex-col rounded-sm relative  overflow-hidden">
                            <img src={arr[i].link} alt="img" className="h-full w-full bg-green-300 rounded-sm  hover:brightness-[0.7] object-fill transition-all transform ease-in duration-300  hover:scale-103"/>
                            <div className="py-2 px-2 w-full bg-[#0000005e] text-white rounded-sm absolute bottom-0">{arr[i].tittle}</div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}
export default TopDest_OutsideIndia;