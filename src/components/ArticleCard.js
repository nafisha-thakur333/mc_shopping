const ArticleCard = (props) =>{
    const {productData} = props
    
    const {
        Article,
        Description,
        ImagesLink
        } = productData;

    return (
        <div
        data-testid="productCard"
        className="group p-4 m-5 w-48 h-64 flex flex-col items-center justify-center rounded-lg shadow-md relative overflow-hidden transition-transform hover:scale-105"
        >
        {/* Light gray box behind image and text on hover */}
        <div className="absolute inset-0 bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        {/* Circular Image with no cropping and 1:1 aspect ratio */}
        <div className="w-40 h-40 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 transition-transform group-hover:scale-110">
            <img
            src={ImagesLink}
            alt="product-logo"
            className="w-full h-full object-cover"
            style={{ borderRadius: '50%' }}  
            />
        </div>

        {/* Product Name and ArticleId */}
        <div className="text-center mt-4 group-hover:text-black transition-colors group-hover:scale-110">
            <h3 className="font-bold text-base">{Description}</h3>
            <h4 className="text-sm text-gray-500">{Article}</h4>
        </div>
        </div>
    )
}

export default ArticleCard