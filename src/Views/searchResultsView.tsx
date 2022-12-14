function SearchResultsView(props: any) {

    function cocktailImageCB(cocktail: any) {

        function itemSelected() {
            props.onItemSelect(cocktail)
        }
        //   function chooseDishACB() {props.clickedDish(dish); window.location.hash = "#details"}
        return (<a href="#detail" onClick={itemSelected}>
            <div className="flex justify-center pb-4">
                <div className="flex rounded-2xl w-4/5 bg-red-900 h-40 items-center justify-center">      
                    <img src={cocktail.strDrinkThumb} className="w-100 h-4/5 shadow-lg shadow-black rounded-2xl text-black"></img>
                    <div className="pl-4 pb-2 flex-row">
                        <div>{cocktail.strDrink}</div>
                        <div>{cocktail.strCategory}</div>
                        <div>{cocktail.strAlcoholic}</div>
                    </div>
                    </div>
            </div>
        </a>
        )
    }

    return (
        <div>
            {
            <div className=" py-8 content-center bg-neutral h-600vh w-screen h-screen justify-between items-center">
                <div className="lg:hidden pt-8"> 
                    {props.searchResults.map(cocktailImageCB)}            
                </div>
                <div className="hidden lg:grid grid-cols-4 bg-neutral item-center justify-between "> 
                {props.searchResults.map(cocktailImageCB)}
                </div>
           </div> 
            }
        </div>
    )
}

export default SearchResultsView
