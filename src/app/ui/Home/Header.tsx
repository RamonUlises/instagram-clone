import { pacifico } from "@/app/fonts";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
    return (
        <section className="bg-white flex justify-between px-4 py-4 border-b items-center dark:bg-black dark:border-[#272727]">
            <h1 className={`${pacifico.className} antialiased text-2xl dark:text-white`}>Instagram</h1>
            <div className="flex gap-4 items-center">
                <div>
                    <input type="text" placeholder="Busca" className="bg-[#f0f0f0] py-[6px] rounded-md valid:pl-4 focus:outline-none focus:border-transparent dark:bg-zinc-800 dark:text-[#aaa]" />
                </div>
                <FontAwesomeIcon icon={faHeart} className="text-2xl dark:text-white" />
            </div>
        </section>
    )
}; 