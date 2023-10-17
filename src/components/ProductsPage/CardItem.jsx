import products from "../../data/dummyProducts"
import FavoriteIcon from '@mui/icons-material/Favorite';
export const CardItem = () => {
  return (
    <div>
        <div className="item flex flex-col py-8 w-[900px]">
            {products.map(item=>(
            <div key={item.id} className="flex items-center transition-all ease-linear shadow-md hover:shadow-lg gap-4 mb-4 rounded-md pl-2 pr-4 py-3" >
                <div className="image">
                    <img className="w-[140px] h-[140px]" src="/public/images/product/product_img_06.jpg" alt="item-image" />
                </div>
                <div className="details max-w-[70%]">
                    <h2 className="text-base mt-1">{item.name}</h2>
                    <h2>{item.brand}</h2>
                     <p className="my-2 text-base">${item.price}</p>
                     <p className="text-[15px]">{item.description}</p>
                     <div className="cart">
                            <button className="flex gap-3 my-3">
                            <div className="border border-gray-900 rounded-full px-2 py-2">
                            <FavoriteIcon sx={{fontSize:"1.5rem"}}/>
                            </div>
                            <div className="border border-gray-900 rounded-full px-3 py-3">
                            <img className="w-[18px] " src="/public/images/header/shoppingbag.jpg" alt="shopping-bag" />
                            </div>
                        </button>
                     </div>
                </div>
            </div>
                ))}
            
        </div>
    </div>
  )
}
