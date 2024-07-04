export default function Gender({handleCardAll, handleCardMen, handleCardWoman}) {


    return (
        <div className="w-[45%] flex justify-center mt-6 md:mt-12">
            <ul className="flex items-center gap-2 text-xs text-[#373A40] " >
                <li onClick={handleCardAll} className="hover:cursor-pointer">All</li>
                <li onClick={handleCardMen} className="hover:cursor-pointer">Men</li>
                <li onClick={handleCardWoman} className="hover:cursor-pointer">Woman</li>
            </ul>
        </div>
    )
}
